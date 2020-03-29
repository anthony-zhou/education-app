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
          <Route path={process.env.PUBLIC_URL + "/instructor"}>
            <TeacherView></TeacherView>
          </Route>
          <Route path={process.env.PUBLIC_URL + "/student"}>
            <StudentView></StudentView>
          </Route>
          <Route path={process.env.PUBLIC_URL + "/"}>
            <IntroScreen></IntroScreen>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
