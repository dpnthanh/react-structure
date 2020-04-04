import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({
  title,
  onClick
}) => {

  return(
    <button
      className="button_main"
      onClick={onClick}>
      {title}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
