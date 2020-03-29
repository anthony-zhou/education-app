import React from 'react';

function Student(props) {
  return (
    <div className="student">
        {props.name}
        <br />
        {props.status}
    </div>
  );
}

export default Student;
