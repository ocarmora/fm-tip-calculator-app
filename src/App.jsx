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
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState('');
  const [totalPerPerson, setTotalPerPerson] = useState('');
  const [cleanTipPercentage, setCleanTipPercentage] = useState(false);
  const [billInputError, setBillInputError] = useState(false);
  const [totalPersonError, setTotalPersonError] = useState(false);

  const handleBillChange = (event) => {
    setBillAmount(event.target.value);
  }

  const handleTipPercentageChange = (event) => {
    /* console.log(event.target.value); */
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
    setCleanTipPercentage(!cleanTipPercentage);
  }

  const validate = () => {
    setBillInputError(false);
    setTotalPersonError(false);

    if (billAmount === '') {
      return setBillInputError(true);
    } else if (totalPerson === '')  {
      return setTotalPersonError(true);
    }

    return true;
  }

  const calculateAll = () => {
    if(!validate()) return;
    const _tipPerPerson = calculateTipAmountPerPerson(billAmount, tipPercentage, totalPerson);
    const _totalPerPerson = calculateTotalPerPerson(billAmount, totalPerson, _tipPerPerson);

    setTipAmountPerPerson(_tipPerPerson);
    setTotalPerPerson(_totalPerPerson);
  }


  useEffect(() => {
    // calculateAll();
  }, [totalPerson, billAmount, tipPercentage]);

  return (
    <>
      <header>
        <img src={ logo } alt='Splitter Logo' />
      </header>

      <main>
        <div className='input-section'>
          <InputText label='Bill' icon='dollar-icon' onChange={handleBillChange} value={billAmount} error={billInputError} onBlur={validate} />
          <Tip tips={tipAmmounts} className='mt-md' onChange={handleTipPercentageChange} cleanTipPercentage={cleanTipPercentage} />
          <InputText label='Number of People' icon='person-icon' className='mt-md' onChange={handlePersonChange} value={totalPerson} error={totalPersonError} onBlur={validate} />
        </div>

        <div className='resume-section'>
          <div className="resume-amount-container">
            <ResumeAmount title='Tip Amount' amount={tipAmountPerPerson} />
            <ResumeAmount id='total-per-person' title='Total' amount={totalPerPerson} className='mt-sm' />
          </div>
          <ButtonReset id='button-reset' className='mt-md' onClick={handleResetClick} />
        </div>        
      </main>
    </>
  );
}

export default App;
