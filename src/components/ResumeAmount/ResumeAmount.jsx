import React from 'react';

const ResumeAmount = (props) => {
  return (
    <div className="">
      <div className="">
        <span>{props.title}</span>
        <span>/person</span>
      </div>
      <span>{props.amount}</span>
    </div>
  );
};

export default ResumeAmount;
