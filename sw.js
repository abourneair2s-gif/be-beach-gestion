// Be Beach — Service worker minimal
// Rôle unique : rendre l'appli "installable" sur l'écran d'accueil (condition requise
// par Android/Chrome pour utiliser la vraie icône du manifeste). Ne fait aucune mise en cache.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Gestionnaire fetch minimal (obligatoire sur certaines versions d'Android/Chrome
// pour que le site soit reconnu comme une PWA installable) — laisse simplement
// passer toutes les requêtes au réseau normalement, sans aucune mise en cache.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
