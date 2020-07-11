import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;

  const greyColor = () => (color ? { backgroundColor: '#e0e0e0' } : { backgroundColor: '#f5913e' });

  const wideWidth = () => (wide ? { flexBasis: '50%' } : { flexBasis: '25%' });

  const baseStyle = {
    outline: 'none',
    border: '2px solid #d1d1d1',
    fontSize: '2rem',
    cursor: 'pointer',

    ':hover': {
      transform: 'scale(1.02)',
      border: '3px solid #d0d9f1',
      color: '#333',
    },
  };

  const assignButtonStyles = { ...baseStyle, ...greyColor(), ...wideWidth() };

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
