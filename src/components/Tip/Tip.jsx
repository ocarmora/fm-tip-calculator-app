import React from 'react';
import './Tip.styles.scss';

const Tip = (props) => {
  return (
      <div className="tip-container">
      {
        props.amount == 'custom'
        ? <input type="text" className='tip-input' name="" id="" />
        : <button className='tip-button' value={props.amount}>{`${props.amount}%`}</button>
      }
      </div>
  );
};

export default Tip;
