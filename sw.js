// Service worker mínimo — necesario para que el navegador ofrezca "Instalar app".
// No hace caché agresivo a propósito: los datos vienen siempre en vivo desde Firestore.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Deja pasar todos los pedidos tal cual (sin cachear), para no mostrar datos viejos.
  event.respondWith(fetch(event.request));
});
