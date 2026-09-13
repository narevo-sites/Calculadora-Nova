const CACHE = "calculadora-nova-v1";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./manifest.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE).then(cache => {
            return cache.addAll(ARCHIVOS);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(respuesta => {
            return respuesta || fetch(event.request);
        })
    );
});
