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
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/ace.js"
></script>
${html}
<script> ${js}</script>
</body>
</html>`;
}