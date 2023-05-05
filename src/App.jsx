import { useEffect, useState } from 'react'
import './App.css'
import CkeEditor from './components/CkeEditor'
import TinyMce from './components/TinyMce';
import TipTap from './components/TipTap';
const html = "<h1>Hello World</h1>"

function App() {
  const [ckeVal, setCkeVal] = useState("");
  const [tinyVal, setTinyVal] = useState("");
  const [tipVal, setTipVal] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCkeVal(html)
      setTinyVal(html)
      setTipVal(html)
    }, 2000)
  }, [])

  return (
    <>
      <CkeEditor value={ckeVal} onChange={(v) => setCkeVal(v)} />
      <br />
      <TinyMce value={tinyVal} onChange={(v) => setTinyVal(v)} />
      <br />
      <TipTap value={tipVal} onChange={(v) => setTipVal(v)} />
    </>
  )
}

export default App
