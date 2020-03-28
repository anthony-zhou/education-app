import React from 'react';
import Problem from '../Problem.js';
import Students from './Students.js';

function TeacherView() {
  return (
    <div className="teacher-view">
      <Problem filename={"findmax.txt"}/>
      <Students></Students>
    </div>
  );
}

export default TeacherView;
