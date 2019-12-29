import React from 'react'
import { render } from 'react-dom'
import PDFViewer from '../lib/viewer'
import '../lib/viewer.css'

function App () {
  return <PDFViewer options={{ height: 800 }} />
}

render(<App />, document.getElementById('root'))