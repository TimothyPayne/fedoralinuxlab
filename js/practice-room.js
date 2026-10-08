/* Questions stay readable and usable without JavaScript or clipboard permission. */
(function () {
  'use strict';
  var spanish = document.documentElement.lang === 'es';
  document.querySelectorAll('[data-copy]').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', async function () {
      var source = document.getElementById(button.dataset.copy);
      var status = button.parentElement.querySelector('[role="status"]');
      try {
        await navigator.clipboard.writeText(source.value !== undefined ? source.value : source.textContent);
        status.textContent = spanish ? 'Copiado. Pega el texto en tu chat de IA.' : 'Copied. Paste this into your AI chat.';
      } catch (error) {
        if (source.select) { source.focus(); source.select(); } else {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(source);
        selection.removeAllRanges();
        selection.addRange(range);
        }
        status.textContent = spanish ? 'No se puede copiar automáticamente. La pregunta está seleccionada. Usa la opción Copiar de tu dispositivo o escribe la pregunta en tu chat de IA.' : 'Automatic copying is unavailable. The question is selected. Use your device’s Copy command, or type it into your AI chat.';
      }
    });
  });
}());
