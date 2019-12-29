import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PDFjsLib from 'pdfjs-dist'
import * as pdfjsViewer from 'pdfjs-dist/web/pdf_viewer'
import 'pdfjs-dist/web/pdf_viewer.css'
import './index.css'

const DEFAULT_WORKSRC = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.2.228/build/pdf.worker.min.js'
const DEFAULT_PDF = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'


class PDFViewer extends Component {

  async componentDidMount () {
    const { options } = this.props
    PDFjsLib.GlobalWorkerOptions.workerSrc = options.workerSrc || DEFAULT_WORKSRC
    const eventBus = new pdfjsViewer.EventBus()
    const pdfLinkService = new pdfjsViewer.PDFLinkService()
    const pdfViewer = new pdfjsViewer.PDFViewer({
      container: this.container,
      viewer: this.viewer,
      eventBus,
      linkService: pdfLinkService,
    })
    pdfLinkService.setViewer(pdfViewer)
    const loadingTask = PDFjsLib.getDocument(options.url || DEFAULT_PDF)
    const pdfDocument = await loadingTask.promise
    pdfViewer.setDocument(pdfDocument)
    pdfLinkService.setDocument(pdfDocument, null)
  }

  render () {
    const { options } = this.props
    return (
      <div className="pdfjs-viewer" style={{ height: options.height }}>
        <div id="viewerContainer" ref={node => this.container = node}>
          <div id="viewer" className="pdfViewer" ref={node => this.viewer = node} />
        </div>
      </div>
    )
  }
}

PDFViewer.propTypes = {
  options: PropTypes.shape({
    url: PropTypes.string,
    data: PropTypes.string,
    height: PropTypes.number,
    workerSrc: PropTypes.string
  })
}

PDFViewer.defaultProps = {
  options: {
    url: DEFAULT_PDF,
    height: 400,
    workerSrc: DEFAULT_WORKSRC
  }
}

export default PDFViewer