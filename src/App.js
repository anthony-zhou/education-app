import React from 'react';
import TeacherView from './TeacherView/TeacherView.js';
import StudentView from './StudentView/StudentView.js';
import IntroScreen from './StudentView/IntroScreen.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/instructor">
            <TeacherView></TeacherView>
          </Route>
          <Route path="/student">
            <StudentView></StudentView>
          </Route>
          <Route path="/">
            <IntroScreen></IntroScreen>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
