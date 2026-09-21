// Single source of truth for the WhatsApp number and pre-filled message.
// To change the number site-wide, edit WHATSAPP_NUMBER below — no HTML edits needed.
(function () {
  var WHATSAPP_NUMBER = '34674788027';
  var WHATSAPP_MESSAGE = 'Hi, I would like to ask for consultation';

  var href =
    'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);

  document.querySelectorAll('a[href*="wa.me/"]').forEach(function (link) {
    link.setAttribute('href', href);
  });
})();
