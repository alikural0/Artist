const CACHE_NAME = "artist-v1";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/Artist/",
        "/Artist/index.html",
        "/Artist/manifest.json",
        "/Artist/icon-192.png",
        "/Artist/icon-512.png",
        "/Artist/btn-oyun.png",
        "/Artist/btn-hesap.png",
        "/Artist/btn-rapor.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});