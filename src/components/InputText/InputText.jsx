import React from 'react';
import './InputText.styles.scss';

const InputText = (props) => {
  return (
    <div className={`input-text-section ${props.className}`}>
      <div className={`input-text-container ${props.className}`}>
        <label className='section-title' htmlFor={ props.id }>{ props.label }</label>
        <span className='error'>Can't be zero</span>
        <div className='input-with-icon'>
          <i className={`icon ${props.icon}`}></i>
          <input id={ props.id } type="text" pattern="\d*" className='input-text' placeholder='0' onChange={props.onChange} value={props.value} />
        </div>
      </div>
    </div>
  );
};
 
export default InputText;
