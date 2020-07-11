import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;


  return (
    <button type="button" className="button" style={assignButtonStyles}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  name: null,
  color: undefined,
  wide: undefined,
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Radium(Button);
