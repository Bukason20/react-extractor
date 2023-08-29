import React, { useCallback, useState } from 'react'
// import pdfjs from "pdfjs-dist"
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url,).toString()

function App() {
  const [feedback, setFeedback] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]

    console.log(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = function () {
        const pdfData = new Uint8Array(reader.result)

      }
    }

  }
  return (
    <div>
      {/* <form > */}
      <input type="file" accept='pdf' name="" id="" onChange={handleFileUpload} />
      {/* <button type='submit'>Submit</button> */}
      {/* </form> */}

    </div >
  )
}

export default App