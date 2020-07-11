import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="wrapper">
      <div className="calculator-container">
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
