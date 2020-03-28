import React from 'react';
import Problem from '../Problem.js';
import AceEditor from "react-ace";
import RunButton from './RunButton'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function StudentView() {
  return (
    <div className="student-view">
      <Problem filename={"findmax.txt"}/>
      <AceEditor
        id="code-editor"
        mode="javascript"
        theme="monokai"
        value={starterCode}
        width="auto"
        height="auto"
        name="code-editor"
        editorProps={{ $blockScrolling:true }}/>
      <RunButton/>
    </div>
  );
}

const starterCode = `function main(nums) {
  // Begin coding here
  return 0;
}
`

export default StudentView;
