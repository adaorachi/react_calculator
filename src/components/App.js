import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  const wrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 0',
    fontSize: '3rem',
  };

  const calculatorContainer = {
    width: '700px',
  };

  return (
    <div className="wrapper" style={wrapper}>
      <div className="calculator-container" style={calculatorContainer}>
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
