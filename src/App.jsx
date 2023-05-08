import { useEffect, useState } from 'react'
import ReactCk from './components/ReactCk'
import ReactTinyMce from './components/ReactTinyMce';
import ReactTipTap from './components/ReactTipTap';
import ReactDraft from './components/ReactDraft';
import ReactQuill from './components/ReactQuill';

const html = "<h1>Hello World</h1>"

function App() {
  const [ckVal, setCkVal] = useState("");
  const [tinyVal, setTinyVal] = useState("");
  const [tipTapVal, setTipTapVal] = useState("");
  const [draftVal, setDraftVal] = useState("");
  const [quillVal, setQuillVal] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCkVal(html)
      setTinyVal(html)
      setTipTapVal(html)
      setDraftVal(html)
      setQuillVal(html)
    }, 2000)
  }, [])

  return (
    <>
      <h4>CKE Editor</h4>
      <ReactCk value={ckVal} onChange={(v) => setCkVal(v)} />
      <br />
      <h4>Tiny MCE</h4>
      <ReactTinyMce value={tinyVal} onChange={(v) => setTinyVal(v)} />
      <br />
      <h4>TipTap Editor</h4>
      <ReactTipTap value={tipTapVal} onChange={(v) => setTipTapVal(v)} />
      <br />
      <h4>React Draft</h4>
      <ReactDraft value={draftVal} onChange={(v) => setDraftVal(v)} />
      <br />
      <h4>React Quill</h4>
      <ReactQuill value={quillVal} onChange={(v) => setQuillVal(v)} />
    </>
  )
}

export default App
