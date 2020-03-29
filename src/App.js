import React from 'react';
import TeacherView from './TeacherView/TeacherView.js';
import StudentView from './StudentView/StudentView.js';
import IntroScreen from './StudentView/IntroScreen.js';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor() {
    super();
    this.state = {studentName: ""};
    this.changeStudentName = this.changeStudentName.bind(this);
  }

  changeStudentName(name) {
    this.setState({studentName: name});
  }

  render() {
    return (
      <div className="container">
        <Router basename="/">
          <Switch>
            <Route path="/instructor">
              <TeacherView></TeacherView>
            </Route>
            <Route path="/student">
              <StudentView studentName={this.state.studentName}></StudentView>
            </Route>
            <Route path="/">
              <IntroScreen changeStudentName={this.changeStudentName}></IntroScreen>
            </Route>
          </Switch>
        </Router>
        
      </div>
    );
  } 
}

export default App;
