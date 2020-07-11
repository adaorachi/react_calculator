import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const panels = {
    height: '100px',
    display: 'flex',
  };

  return (
    <div className="panel-buttons">
      <div className="panels" style={panels}>
        <Button name="AC" color />
        <Button name="+/-" color />
        <Button name="%" color />
        <Button name="÷" />
      </div>
      <div className="panels" style={panels}>
        <Button name="7" color />
        <Button name="8" color />
        <Button name="9" color />
        <Button name="x" />
      </div>
      <div className="panels" style={panels}>
        <Button name="4" color />
        <Button name="5" color />
        <Button name="6" color />
        <Button name="-" />
      </div>
      <div className="panels" style={panels}>
        <Button name="1" color />
        <Button name="2" color />
        <Button name="3" color />
        <Button name="+" />
      </div>
      <div className="panels" style={panels}>
        <Button name="0" wide color />
        <Button name="." color />
        <Button name="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
