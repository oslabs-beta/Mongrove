import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
// for codemirror styling
import 'codemirror/lib/codemirror.css'; // base css
import 'codemirror/theme/material.css'; // theme css
// for enabling js in codemirror
import 'codemirror/mode/javascript/javascript';
// importing the text editor

const Editor = (props) => {
  const { 
    displayName,
    value,
    onChange
  } = props;
    
  // handling change within codemirror editor
  function handleChange(editor, data, value) {
    onChange(value);
  }

    return (
        <div className="editor-container">
          {/* label for codemirror input */}
          <div className="editor-label">
            {displayName}
          </div>
          {/* codemirror editor */}
          <CodeMirror
            onBeforeChange={handleChange}
            value={value}
            className="codemirror-wrapper"
            options={{
              lineWrapping: true,
              lint: true,
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true
            }}

          />  
        </div>
    )
};

export default Editor;
