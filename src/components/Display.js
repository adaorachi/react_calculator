import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const displayArea = {
    height: '100px',
    fontWeight: 'bolder',
    color: '#fff',
    backgroundColor: '#858694',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 1rem',
  };

  const { value } = props;
  return (
    <div className="display-area" style={displayArea}>
      {value}
    </div>
  );
};

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
