import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="panel-buttons">
    <div className="panels">
      <Button name="AC" color="grey" />
      <Button name="+/-" color="grey" />
      <Button name="%" color="grey" />
      <Button name="÷" />
    </div>
    <div className="panels">
      <Button name="7" color="grey" />
      <Button name="8" color="grey" />
      <Button name="9" color="grey" />
      <Button name="x" />
    </div>
    <div className="panels">
      <Button name="4" color="grey" />
      <Button name="5" color="grey" />
      <Button name="6" color="grey" />
      <Button name="-" />
    </div>
    <div className="panels">
      <Button name="1" color="grey" />
      <Button name="2" color="grey" />
      <Button name="3" color="grey" />
      <Button name="+" />
    </div>
    <div className="panels">
      <Button name="0" wide color="grey" />
      <Button name="." color="grey" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
