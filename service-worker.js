var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'my_cart.html',
    'scripts.js',
    'petstore.webmanifest',
    'images/icon.png',
    'images/strategy.jpg',
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUtil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the file');
            return cache.addAll(cacheFiles)
        })
    );
});