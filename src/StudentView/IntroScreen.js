import React from 'react';

class IntroScreen extends React.Component {
  constructor() {
    super();
    this.state = {name: "Your name here"};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue) {
    this.setState({name:newValue});
  }

  render() {
    return (
      <div className="intro-screen">
        <input type="text" value={this.state.name} onChange={this.handleChange}></input>
      </div>
    );
  }
}


export default IntroScreen;
