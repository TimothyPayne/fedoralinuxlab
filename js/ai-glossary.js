/* The glossary remains readable and selectable without JavaScript. */
(function () {
  'use strict';
  var button = document.getElementById('copy-glossary');
  var source = document.getElementById('ai-glossary-text');
  var status = document.getElementById('glossary-status');
  if (!button || !source || !status) return;
  var spanish = document.documentElement.lang === 'es';
  button.hidden = false;
  button.addEventListener('click', async function () {
    try {
      await navigator.clipboard.writeText(source.innerText);
      status.textContent = spanish ? 'Glosario copiado. Pégalo en tus notas o en un documento para guardarlo.' : 'Glossary copied. Paste it into your notes or a document to save it.';
    } catch (error) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(source);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = spanish ? 'La copia automática no está disponible. El glosario está seleccionado. Usa la opción Copiar de tu dispositivo y pégalo en tus notas o en un documento.' : 'Automatic copying is unavailable. The glossary is selected. Use your device’s Copy command, then paste it into your notes or a document.';
    }
  });
}());
