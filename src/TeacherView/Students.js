import React from 'react';
import Student from './Student.js';

function Students() {
  return (
    <div className="students">
      <Student name={"John Mulaney"} status={"completed"}></Student>
    </div>
  );
}

export default Students;
