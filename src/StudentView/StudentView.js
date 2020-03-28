import React from 'react';
import Problem from '../Problem.js';
import AceEditor from "react-ace";

function StudentView() {
  return (
    <div className="student-view">
      <Problem filename={"findmax.txt"}/>
      <AceEditor
        id="code-editor"
        mode="javascript"
        theme="monokai"
        name="code-editor"
        editorProps={{ $blockScrolling:true }}/>
    </div>
  );
}

export default StudentView;
