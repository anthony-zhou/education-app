import React from 'react';

class IntroScreen extends React.Component {
  render() {
    return (
      <div className = "intro-screen">
        <div id = "wrapper">
          <h1 style={{color: "white"}}>Welcome to the Education App!</h1>
          <form action="/api/users" method="POST">  
            <input type="text" placeholder="Type stuff"/>
            <button>start coding!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default IntroScreen;
