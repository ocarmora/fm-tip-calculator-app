import './scss/styles.scss';
import logo from './images/logo.svg';
import InputText from './components/InputText';
import Tip from './components/Tip';
import ResumeAmount from './components/ResumeAmount';
import ButtonReset from './components/ButtonReset';

function App() {

  const tipAmmounts = [5, 10, 15, 25, 50, 'custom'];

  return (
    <>
      <header>
        <img src={ logo } alt='Splitter Logo' />
      </header>

      <main>
        <div className='input-section'>
          <InputText label='Bill' id='input-bill' icon='dollar-icon'/>
          <Tip tips={tipAmmounts} className='mt-md' />
          <InputText label='Number of People' id='input-people' icon='person-icon' className='mt-md'/>
        </div>

        <div className='resume-section'>
          <div className="resume-amount-container">
            <ResumeAmount title='Tip Amount' amount={0} />
            <ResumeAmount id='total-per-person' title='Total' amount={0} className='mt-sm' />
          </div>
          <ButtonReset id='button-reset' className='mt-md' />
        </div>        
      </main>
    </>
  );
}

export default App;
