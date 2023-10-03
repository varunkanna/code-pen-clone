import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript"
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml'
import { Controlled as ControlledEditor } from "react-codemirror2";


function Editor(props) {
    const { displayName, onChange, language, value } = props;
    const handleChange = (editor, data, value) => {
        onChange(value)
    }
    
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>o/c</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapper: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material'
        }}
      />
    </div>
  );
}

export default Editor;
