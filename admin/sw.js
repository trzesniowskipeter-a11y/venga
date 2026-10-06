/* The phone app moved to /app/. This file only removes the old copy that
   was installed from /admin/, so /admin/ is a plain web page again. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('venga-admin')).map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
