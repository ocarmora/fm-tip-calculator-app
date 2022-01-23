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

        <div className='resume-section mt-md'>
          <ResumeAmount title='Tip Amount' amount={4.27} />
          <ResumeAmount title='Total' amount={32.79} className='mt-sm' />
          <ButtonReset className='mt-md' />
        </div>
        
      </main>

    </>
  );
}

export default App;
