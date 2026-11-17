// Applies the number/message from js/whatsapp-config.js to every wa.me link.
// To change the number site-wide, edit js/whatsapp-config.js — nothing else.
(function () {
  if (!window.WHATSAPP_NUMBER) return;

  var href =
    'https://wa.me/' + window.WHATSAPP_NUMBER +
    '?text=' + encodeURIComponent(window.WHATSAPP_MESSAGE || '');

  document.querySelectorAll('a[href*="wa.me/"]').forEach(function (link) {
    link.setAttribute('href', href);
  });
})();
