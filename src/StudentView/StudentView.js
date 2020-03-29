import React from 'react';
import Problem from '../Problem.js';
import AceEditor from "react-ace";
import RunButton from './RunButton'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "./student.css";
import Popup from './Popup.js';

class StudentView extends React.Component {
  constructor() {
    super();
    this.state = {content: starterCode, showPopup: false, correct: false};
    this.togglePopup = this.togglePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCorrect = this.setCorrect.bind(this);
  }

  handleChange(newValue) {
    this.setState({ content:newValue});
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
  }
  
  setCorrect(newCorrect) {
    this.setState({
          correct: newCorrect
    });
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
        <RunButton content={this.state.content} togglePopup={this.togglePopup} setCorrect={this.setCorrect} />
        
        {this.state.showPopup ?
        <Popup
            text={this.state.correct? "Congrats! All test cases passed." : "Not all test cases passed. Please try again."}
            togglePopup={this.togglePopup}
          />
        : null }
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
