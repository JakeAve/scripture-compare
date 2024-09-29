const PRE_CACHE = "pre-cache-f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f";
const RUNTIME = "runtime";

const PRE_CACHE_URLS = [
    "/styles.css",
    "/register.js",
    "/favicon.ico",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/main.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/chunk-7O42C3QO.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/chunk-FEDUQ665.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/deserializer.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/signals.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/chunk-FSUZ4Z2X.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/chunk-ZTNRVIJH.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/island-header.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/chunk-LLPNOAVM.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/island-offline.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/island-picture.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/island-wordmatcheventlistener.js",
    "/_frsh/js/f77e4bfb5e8ba124d5668ca5c9069dd97dbd782f/metafile.json",
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
                ).catch(() => null);
                return cachedResponse || fetchPromise;
            }),
        );
    }
});
