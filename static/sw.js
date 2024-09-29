const PRE_CACHE = "pre-cache-c6610340992457899904eb9ebb6ee85620c75070";
const RUNTIME = "runtime";

const PRE_CACHE_URLS = [
  "/styles.css",
  "/register.js",
  "/favicon.ico",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/main.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/chunk-G2PFKLIM.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/chunk-FEDUQ665.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/deserializer.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/signals.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/chunk-FSUZ4Z2X.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/chunk-ZTNRVIJH.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/island-header.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/chunk-LLPNOAVM.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/island-offline.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/island-picture.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/island-wordmatcheventlistener.js",
  "/_frsh/js/c6610340992457899904eb9ebb6ee85620c75070/metafile.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(PRE_CACHE)
            .then((cache) => cache.addAll(PRE_CACHE_URLS))
            .then(self.skipWaiting()),
    );
});

self.addEventListener("activate", (event) => {
    const currentCaches = [PRE_CACHE, RUNTIME];
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return cacheNames.filter(
                    (cacheName) => !currentCaches.includes(cacheName),
                );
            })
            .then((cachesToDelete) => {
                return Promise.all(
                    cachesToDelete.map((cacheToDelete) =>
                        caches.delete(cacheToDelete)
                    ),
                );
            })
            .then(() => self.clients.claim()),
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.open(RUNTIME).then(async (cache) => {
                const cachedResponse = await cache.match(event.request);
                const fetchPromise = fetch(event.request).then(
                    (networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    },
                );
                return cachedResponse || fetchPromise;
            }),
        );
    }
});
