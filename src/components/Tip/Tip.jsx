import React, { useState } from 'react';
import './Tip.styles.scss';

const Tip = (props) => {

  const [tipSelected, setTipSelected] = useState();

  const handleTipSelection = ({target}) => {
    // setTipSelected(target.value);
    // console.log(tipSelected)
  }

  return (
    <div className={`tip-section ${props.className}`}>
      <span className='section-title'>Select Tip %</span>
      <div className="tip-container">
        {props.tips.map((tip, index) => (
          tip == 'custom'
          ? <input type="text" className='tip-input' className='input-text tip-input' placeholder='Custom' onChange={handleTipSelection} key={index} />
          : <button className={`tip-button ${tipSelected == tip ? 'selected' : ''}`} onClick={handleTipSelection} value={tip} key={index}>{tip}%</button>
        ))}
      </div>
    </div>
  );
};

export default Tip;
