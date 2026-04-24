// Contact form: POST to Google Apps Script + "Other" topic reveal
(function () {
  const SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbycCEABZ75veoNniMdVrhAzQRKxTB5nQ_wFK8WqstdYeKMw3I-Ma_cuBX_gWQv9c3KR/exec';

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  // "Other" topic toggle
  const topic = form.querySelector('#topic');
  const otherWrap = form.querySelector('#otherTopicWrap');
  if (topic && otherWrap) {
    const update = () => {
      otherWrap.style.display = topic.value === 'Other' ? 'block' : 'none';
    };
    topic.addEventListener('change', update);
    update();
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = 'Sending...';

    try {
      const data = new FormData(form);
      // Force phone to stay a string in Google Sheets
      const phoneVal = data.get('phone');
      if (phoneVal) data.set('phone', "'" + phoneVal);

      const body = new URLSearchParams();
      for (const [k, v] of data.entries()) body.append(k, v);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      status.className = 'form-status success';
      status.textContent = 'Thanks — we will get back to you within 24h.';
      form.reset();
      if (topic && otherWrap) otherWrap.style.display = 'none';
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = 'Submission failed. Please email ask@realdatatalks.com directly.';
    }
  });
})();
