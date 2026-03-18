const CACHE_NAME = 'qr-go-v1.7.4';
const ASSETS = [
  'index.html',
  'manifest.json',
  'logo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
