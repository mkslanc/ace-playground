export function generateTemplate(js, html, css) {
    if (useCustomUserCode(html)) {
        html+=`<script>${js}</script>`;
        html+=`<style>${css}</style>`;
        return html;
    }
    return `<html>
<head>
  <style>
      html, body {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          height: 100%
      }
      ${css}
  </style>
</head>
<body>
<script>
  function wrapConsole(level) {
    console[level] = (...args) => {
      parent.postMessage({log: level, elements: args});
    };
  }
  wrapConsole("log");
  wrapConsole("warn");
  wrapConsole("error");
  
  window.addEventListener("error", e => console.error(e.error || e.message));

</script>
${html}
<script>${js}</script>
</body>
</html>`;
}

export function useCustomUserCode(html: string) {
    return /^\s*(?:<html|<doctype)/i.test(html);
}
