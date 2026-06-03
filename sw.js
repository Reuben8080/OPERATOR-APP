const CACHE_NAME = 'operator-v1';

const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
]

// Pre-cache on install
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});

// Claim clients on activate
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

// Cache-first fetch strategy
self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);

        const cachedResponse = await cache.match(event.request);

        if (cachedResponse !== undefined) {
            return cachedResponse;
        } else {
            const networkResponse = await fetch(event.request);
            // Cache successful same-origin responses for offline use
            if (networkResponse.ok) {
                cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
        }
    })());
});
