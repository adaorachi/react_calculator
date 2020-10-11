import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => {
    const { clickHandler } = props;
    return clickHandler(buttonName);
  };

  return (
    <div className="panel-buttons">
      <div className="panels">
        <Button name="AC" color="grey" clickHandler={handleClick} />
        <Button name="+/-" color="grey" clickHandler={handleClick} />
        <Button name="%" color="grey" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="panels">
        <Button name="7" color="grey" clickHandler={handleClick} />
        <Button name="8" color="grey" clickHandler={handleClick} />
        <Button name="9" color="grey" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div className="panels">
        <Button name="4" color="grey" clickHandler={handleClick} />
        <Button name="5" color="grey" clickHandler={handleClick} />
        <Button name="6" color="grey" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="panels">
        <Button name="1" color="grey" clickHandler={handleClick} />
        <Button name="2" color="grey" clickHandler={handleClick} />
        <Button name="3" color="grey" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="panels">
        <Button name="0" wide color="grey" clickHandler={handleClick} />
        <Button name="." color="grey" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
