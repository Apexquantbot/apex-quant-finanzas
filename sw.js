// Service Worker - Apex Quant Finanzas v1.0
// Solo guarda la "carcasa" (pestañas e iconos). Las apps Pro y Mercados
// se cargan siempre frescas desde sus propias webs.
const CACHE_NAME = 'apex-finanzas-v1.1';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // lo de fuera (las dos apps) pasa directo
  const clave = new Request(url.origin + url.pathname);
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const res = await fetch(req);                    // red primero
      if (res && res.ok) cache.put(clave, res.clone()).catch(() => {});
      return res;
    } catch (err) {
      const guardado = await cache.match(clave);
      return guardado || cache.match('./index.html');
    }
  })());
});
