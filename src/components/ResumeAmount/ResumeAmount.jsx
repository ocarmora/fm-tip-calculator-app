import React from 'react';
import './ResumeAmount.styles.scss';

const ResumeAmount = (props) => {
  return (
    <>
      <div className={`amount-detail-container ${props.className}`}>
        <div className='amount-detail'>
          <span className='amount-detail-title'>{props.title}</span>
          <span className='amount-detail-single'>/ person</span>
        </div>
        <span>${props.amount}</span>
      </div>
    </>
  );
};

export default ResumeAmount;
