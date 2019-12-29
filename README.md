## usage

`npm install react-pdfjs-component`

```jsx
import React from "react";
import ReactDOM from "react-dom";
import PDFViewer from "react-pdfjs-component";
import "react-pdfjs-component/lib/viewer.css";

import "./styles.css";

function App() {
  return <PDFViewer 
    options={{ 
      height: 800,
      url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
      // switch to anoter cdn
      workerSrc: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.2.228/build/pdf.worker.min.js',
      data: 'stream' // not support yet
    }} 
  />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

## example

codesandbox: https://codesandbox.io/s/intelligent-haze-hwpvy


## todo

[ ] file data
[ ] findContorller
[ ] cursorController
[ ] markers
[ ] demo site