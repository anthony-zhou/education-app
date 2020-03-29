import React from 'react';
import {useHistory} from 'react-router-dom';

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.handleChange = this.handleChange.bind(this);
    
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleChange(event) {
    this.props.changeStudentName(event.target.value);
    this.setState({name: event.target.value});
  }


 

  render() {
    return (
      <div className = "intro-screen">
      <div id = "wrapper">
      <h1 style={{color: "white"}}>Welcome to Code Together!</h1>
      <form method="POST" action="https://arcane-spire-25876.herokuapp.com/api/users">
        <input type="hidden" name="url" value="https://anthony-zhou.github.io/education-app/#/student"/>
        <input type="text" name="name" placeholder="Your name" onChange={this.handleChange} value={this.state.name} required/>
        <SubmitButton name={this.state.name}></SubmitButton>
      </form>
  </div>
      </div>
    );
  }
}

function SubmitButton(props) {

  let history = useHistory();

  // function onClick(e) {
  //   // e.preventDefault();
  //   history.push("/student")

  // }

  return (
    <button id="signup-btn" /*onClick={onClick}*/>start coding!</button>
  );
}

export default IntroScreen;
