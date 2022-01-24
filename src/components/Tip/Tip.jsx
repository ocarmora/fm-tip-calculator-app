import React, { useState, useEffect } from 'react';
import './Tip.styles.scss';

const Tip = (props) => {

  const [tipSelected, setTipSelected] = useState();
  const [customTipPercentage, setCustomTipPercentage] = useState('');

  const handleTipSelection = (event) => {
    if(event.target.name === 'tip-custom') {
      setTipSelected('');
      setCustomTipPercentage(event.target.value);
    }else{
      setCustomTipPercentage('');
      setTipSelected(event.target.value);
    }
    
    handleOnChange(event);
  }

  const handleOnChange = (event) => {
    props.onChange(event);
  } 

  useEffect(() => {
    setTipSelected('')
    setCustomTipPercentage('');
  
  }, [props.cleanTipPercentage]);
  

  return (
    <div className={`tip-section ${props.className}`}>
      <span className='section-title'>Select Tip %</span>
      <div className="tip-container">
        {props.tips.map((tip, index) => (
          tip === 'custom'
            ? <input
                type="text"
                className='input-text tip-input'
                placeholder='Custom'
                onChange={handleTipSelection}
                key={index}
                name='tip-custom'
                pattern="\d*"
                value={customTipPercentage}
              />
            : <button
                className={`tip-button ${Number.parseInt(tipSelected) === tip ? 'selected' : ''}`}
                onClick={handleTipSelection}
                value={tip}
                key={index}
              >
                {tip}%
              </button>
        ))}
      </div>
    </div>
  );
};

export default Tip;
