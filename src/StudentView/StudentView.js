import React from 'react';
import Problem from '../Problem.js';
import AceEditor from "react-ace";
import RunButton from './RunButton'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

class StudentView extends React.Component {
  constructor() {
    super();
    this.state = {content: starterCode};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue) {
    this.setState({ content:newValue});
  }

  render() {
    return (
      <div className="student-view">
        <Problem filename={"findmax.txt"}/>
        <AceEditor
          id="code-editor"
          mode="javascript"
          theme="monokai"
          onChange={this.handleChange}
          value={this.state.content}
          width="auto"
          height="auto"
          fontSize={14}
          name="code-editor"
          editorProps={{ $blockScrolling:true }}/>
        <RunButton content={this.state.content}/>
      </div>
    );
  }
}

const starterCode = `function (nums) {
  //enter code
  return 0;
}
`

export default StudentView;
