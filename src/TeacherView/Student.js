import React from 'react';

function Student(props) {
  return (
    <div className="student">
        {props.name}
        {props.status}
    </div>
  );
}

export default Student;
