import React from 'react';
import './InputText.styles.scss';

const InputText = (props) => {
  return (
    <div className="input-text-container">
      <label htmlFor={ props.id }>{ props.label }</label>
      <span className='error'>Can't be zero</span>
      <div className="input-with-icon">
        <i className={`icon ${props.icon}`}></i>
        <input id={ props.id } type="text" value="142.55"/>
      </div>
    </div>
  );
};
 
export default InputText;
