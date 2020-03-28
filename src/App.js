import React from 'react';
import TeacherView from './TeacherView/TeacherView.js';
import StudentView from './StudentView/StudentView.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/instructor">
            <TeacherView></TeacherView>
          </Route>
          <Route path="/">
            <StudentView></StudentView>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
