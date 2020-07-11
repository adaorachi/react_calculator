import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
};

Button.defaultProps = {
  name: null,
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
