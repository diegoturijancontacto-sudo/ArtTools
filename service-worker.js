const CACHE_NAME = "Catalogo";
const urlsToCache = [
  "/",
  "/index.html",
  "/Roboto-Italic-VariableFont_wdth,wght.ttf",
  "/Roboto-VariableFont_wdth,wght.ttf",
  "/IbarraRealNova-VariableFont_wght.ttf",
  "/IbarraRealNova-Italic-VariableFont_wght.ttf"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
