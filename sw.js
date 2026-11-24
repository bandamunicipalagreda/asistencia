// Necesario para que el móvil ofrezca «Instalar». No guarda nada: la app siempre está al día.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
