import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, color, wide,
  } = props;

  const greyColor = (color === 'grey') ? { backgroundColor: '#e0e0e0' } : { backgroundColor: '#f5913e' };
  const wideWidth = wide ? { flexBasis: '50%' } : { flexBasis: '25%' };
  const buttonStyles = { ...greyColor, ...wideWidth };

  return (
    <button type="button" className="button" style={buttonStyles}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
