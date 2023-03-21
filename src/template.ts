export function generateTemplate(js, html, css) {
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
  function serialize(val) {
    let seen = new Set;
    function inner(val) {
      if (val instanceof Error) return {error: val.toString(), stack: val.stack}
      if (typeof val == "function") return {function: val.name || "?"}
      if (val == null || typeof val != "object") return val
      if (seen.has(val)) return {cycle: true}
      seen.add(val);
      if (Array.isArray(val)) return {array: val.map(inner)}
      let result = {object: Object.create(null), ctor: ctorName(val)};
      for (let prop of Object.keys(val)) {
        try { result.object[prop] = inner(val[prop]); }
        catch {}
      }
      return result
    }
    return inner(val)
  }

  function wrapConsole(level) {
    let old = console[level];
    console[level] = (...args) => {
      old.apply(console, args);
      parent.postMessage({log: level, elements: args.map(serialize)});
    };
  }
  wrapConsole("log");
  wrapConsole("warn");
  wrapConsole("error");
  window.addEventListener("error", e => console.error(e.error));

</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/ace.js"
></script>
${html}
<script>${js}</script>
</body>
</html>`;
}
