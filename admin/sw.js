/* Venga Admin — service worker.
   Pages: network first, so staff always get the newest panel; the cached copy
   only opens the app when there is no connection.
   Reservation data (supabase.co) is never cached — it must always be live. */
const VERSION = 'venga-admin-v3';
const LIB = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
const SHELL = ['/admin/', '/admin/i18n.js', '/assets/fonts.css', '/admin/icons/icon-192.png', '/admin/icons/apple-180.png'];

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
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('/admin/', copy)); return res; })
        .catch(() => caches.match('/admin/'))
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
