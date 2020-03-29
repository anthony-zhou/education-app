import React from 'react';

class IntroScreen extends React.Component {
  render() {
    return (
      <div className = "intro-screen">
      <div id = "wrapper">
      <h1 style={{color: "white"}}>Welcome to the Education App!</h1>
      <input type="text" placeholder="Type stuff"/>
  <button>start coding!</button>
  </div>
      </div>
    );
  }
}

export default IntroScreen;
