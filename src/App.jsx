import './scss/styles.scss';
import logo from './images/logo.svg';
import InputText from './components/InputText';
import Tip from './components/Tip';
import ResumeAmount from './components/ResumeAmount';
import ButtonReset from './components/ButtonReset';
import { useState, useEffect } from 'react';

function App() {

  const tipAmmounts = [5, 10, 15, 25, 50, 'custom'];
  const [billAmount, setBillAmount] = useState('');
  const [totalPerson, setTotalPerson] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState('0.00');
  const [totalPerPerson, setTotalPerPerson] = useState('0.00');
  const [cleanTipPercentage, setCleanTipPercentage] = useState(false);
  const [billInputError, setBillInputError] = useState(false);
  const [totalPersonError, setTotalPersonError] = useState(false);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(true);

  const handleBillChange = (event) => {
    setBillAmount(event.target.value);
  }

  const handleTipPercentageChange = (event) => { 
    setTipPercentage(event.target.value);
  }

  const handlePersonChange = (event) => {
    setTotalPerson(event.target.value);
  }

  const calculateTipAmountPerPerson = (bill, tipPercentage, persons) => {
    return (bill * (tipPercentage / 100) / persons);
  }
  
  const calculateTotalPerPerson = (bill, persons, tipAmountPerPerson) => {
    return (bill / persons) + tipAmountPerPerson;
  }

  const handleResetClick = () => {
    setBillAmount('');
    setTotalPerson('');
    setTipPercentage('');
    setTipAmountPerPerson('0.00');
    setTotalPerPerson('0.00');
    setCleanTipPercentage(!cleanTipPercentage);
    cleanErrors();
    setResetButtonDisabled(true);
  }

  const cleanErrors = () => {
    setBillInputError(false);
    setTotalPersonError(false);
  }

  const validateInput = (event) => {

    if(event.target.id === 'bill-input') {
      setBillInputError(false); 
    }else {
      setTotalPersonError(false);
    }

    if(event.target.value === '') {
      return event.target.id === 'bill-input' ? setBillInputError(true) : setTotalPersonError(true);
    }
  }

  const calculateAll = () => {
    const _tipPerPerson = calculateTipAmountPerPerson(billAmount, tipPercentage, totalPerson);
    const _totalPerPerson = calculateTotalPerPerson(billAmount, totalPerson, _tipPerPerson);

    setTipAmountPerPerson(_tipPerPerson.toFixed(2));
    setTotalPerPerson(_totalPerPerson.toFixed(2));
  }


  useEffect(() => {
    if(totalPerson && billAmount && tipPercentage) {
      setResetButtonDisabled(false);
      calculateAll();
    }
  }, [totalPerson, billAmount, tipPercentage]);

  return (
    <>
      <header>
        <img src={ logo } alt='Splitter Logo' />
      </header>

      <main>
        <div className='input-section'>
          <InputText
            id='bill-input'
            label='Bill'
            icon='dollar-icon'
            value={billAmount}
            error={billInputError}
            onChange={handleBillChange}
            onBlur={validateInput}
           />
          <Tip tips={tipAmmounts} className='mt-md' onChange={handleTipPercentageChange} cleanTipPercentage={cleanTipPercentage} />
          <InputText
            id='input-input'
            label='Number of People'
            icon='person-icon'
            className='mt-md'
            value={totalPerson}
            error={totalPersonError}
            onChange={handlePersonChange}
            onBlur={validateInput}
          />
        </div>

        <div className='resume-section'>
          <div className="resume-amount-container">
            <ResumeAmount title='Tip Amount' amount={tipAmountPerPerson} />
            <ResumeAmount id='total-per-person' title='Total' amount={totalPerPerson} className='mt-sm' />
          </div>
          <ButtonReset disabled={resetButtonDisabled} id='button-reset' className='mt-md' onClick={handleResetClick} />
        </div>        
      </main>
    </>
  );
}

export default App;
