/* Venga Admin — service worker.
   Pages: network first, so staff always get the newest panel; the cached copy
   only opens the app when there is no connection.
   Reservation data (supabase.co) is never cached — it must always be live. */
const VERSION = 'venga-app-v2';
const LIB = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
const SHELL = ['/app/', '/app/icons/badge-96.png', '/admin/i18n.js', '/assets/fonts.css', '/app/icons/icon-192.png', '/app/icons/apple-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all([
    c.addAll(SHELL),
    // the panel cannot start without this library, so keep a copy for offline starts
    c.add(new Request(LIB, { mode: 'cors' })).catch(() => {})
  ])).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('supabase.co')) return;            // live data only

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('/app/', copy)); return res; })
        .catch(() => caches.match('/app/'))
    );
    return;
  }
  // fonts, icons, the supabase library: serve fast from cache, refresh in background
  const same = url.origin === self.location.origin;
  const lib = url.hostname === 'cdn.jsdelivr.net';
  if (!same && !lib) return;
  e.respondWith(
    caches.open(VERSION).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(res => { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    }))
  );
});

/* ---- push notifications: new bookings ---- */
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: 'Venga', body: e.data ? e.data.text() : '' }; }
  const show = self.registration.showNotification(d.title || 'Venga', {
    body: d.body || '', icon: '/app/icons/icon-192.png', badge: '/app/icons/badge-96.png',
    tag: d.tag || 'venga', renotify: true, vibrate: [80, 40, 80], data: { url: d.url || '/app/' }
  });
  const badge = (d.badge && self.navigator && self.navigator.setAppBadge) ? self.navigator.setAppBadge(d.badge).catch(() => {}) : Promise.resolve();
  /* an open app refreshes its list straight away */
  const tell = self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    .then(list => list.forEach(c => c.postMessage({ type: 'venga-refresh' })));
  e.waitUntil(Promise.all([show, badge, tell]));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/app/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) {
      if (c.url.includes('/app/') && 'focus' in c) { c.postMessage({ type: 'venga-open', url }); return c.focus(); }
    }
    return self.clients.openWindow(url);
  }));
});
