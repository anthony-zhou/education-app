import React from 'react';
import { Component } from 'react';
import Student from './Student.js';


const api = "http://arcane-spire-25876.herokuapp.com/api/users";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    
  }

  async componentDidMount(){
    await fetch(api)
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const students = this.state.users.map(user => 
      <Student key={user._id} name={user.name} status={user.completed === true ? "complete" : "incomplete"} />
    );

    return (
      <div className="students">
        {students}
      </div>
      
    );
  }
}

export default Students;
