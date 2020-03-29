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
      <h1 style={{color: "white"}}>Welcome to the Education App!</h1>
      <form method="POST" action="http://arcane-spire-25876.herokuapp.com/api/users">
        <input type="hidden" name="url" value="localhost:3000/education-app#/student"/>
        <input type="text" name="name" placeholder="Your name" onChange={this.handleChange} value={this.state.name} required/>
        <SubmitButton></SubmitButton>
      </form>
  </div>
      </div>
    );
  }
}

function SubmitButton() {

  let history = useHistory();

  function onClick(e) {
    e.preventDefault();
    history.push("/student");
  }

  return (
    <button onClick={onClick}>start coding!</button>
  );
}

export default IntroScreen;
