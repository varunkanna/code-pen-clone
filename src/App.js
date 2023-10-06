import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import './App.css'
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
        <html>
        <body>${html}</body> 
        <style>${css}</style>
        <script>${js}</script>
        </html>
      `)
    }, 250)
  
    return () => {
      clearTimeout(timeOut)
    }
  }, [html, css, js])
  
  return (
    <>
      <div className="box top-box">
        <Editor language='xml' displayName='HTML' value={html} onChange={setHtml} />
        <Editor language='css' displayName='CSS' value={css} onChange={setCss} />
        <Editor language='javascript' displayName='JS' value={js} onChange={setJs} />
      </div>
      <div className="box">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder={"0"}
          width={"100%"}
          height={"100%"}
          srcDoc={srcDoc}
        />
      </div>
    </>
  );
}

export default App;
