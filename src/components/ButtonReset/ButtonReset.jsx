import React from 'react';
import './ButtonReset.styles.scss';

const ButtonReset = (props) => {
  return (
    <button
      type='button'
      className={`button-reset ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Reset
    </button>
  );
};

export default ButtonReset;
