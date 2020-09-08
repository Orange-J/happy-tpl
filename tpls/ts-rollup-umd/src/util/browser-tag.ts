(function (window: any, document, tagName, scriptUrl, globalName) {
  window['KassadinMonitorObject'] = globalName;
  window[globalName] =
    window[globalName] ||
    function (config: any) {
      window[globalName].config = config;
    };

  const scriptElement = document.createElement(tagName) as HTMLScriptElement;
  const firstElement = document.getElementsByTagName(tagName)[0];
  scriptElement.async = true;
  scriptElement.src = scriptUrl;
  if (firstElement.parentNode) {
    firstElement.parentNode.insertBefore(scriptElement, firstElement)
  }
})(window, document, 'script', '/index.browser.js', 'Kassadin');