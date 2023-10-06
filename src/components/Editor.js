import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { MdOutlineCloseFullscreen, MdOutlineOpenInFull } from "react-icons/md";

function Editor(props) {
  const { displayName, onChange, language, value } = props;
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  const [open, setOpen] = useState(true);
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {open ? <MdOutlineCloseFullscreen /> : <MdOutlineOpenInFull />}
        </button>
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
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
