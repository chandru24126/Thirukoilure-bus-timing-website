self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('bus-timing-v1').then(cache =>
      cache.addAll(['/', '/index.html', '/icon.png'])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
