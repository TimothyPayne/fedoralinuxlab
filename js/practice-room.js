/* Questions stay readable and usable without JavaScript or clipboard permission. */
(function () {
  'use strict';
  document.querySelectorAll('[data-copy]').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', async function () {
      var source = document.getElementById(button.dataset.copy);
      var status = button.parentElement.querySelector('[role="status"]');
      try {
        await navigator.clipboard.writeText(source.textContent);
        status.textContent = 'Copied. Paste this into your AI chat.';
      } catch (error) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(source);
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Automatic copying is unavailable. The question is selected. Use your device’s Copy command, or type it into your AI chat.';
      }
    });
  });
}());
