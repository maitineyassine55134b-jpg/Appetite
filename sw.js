const CACHE = 'appetite-v3';
const ASSETS = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './photos/tacos.jpg', './photos/pizza_vegetarienne.jpg', './photos/pizza_hawaienne.jpg', './photos/pizza_roquette.jpg', './photos/burger_classic.jpg', './photos/burger_cheese.jpg', './photos/cafe_espresso.jpg', './photos/cafe_noir.jpg', './photos/cafe_cappuccino.jpg', './photos/sandwich_jambon.jpg', './photos/sandwich_vegetarien.jpg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});
