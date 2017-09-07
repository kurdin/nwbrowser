import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './MinusButton.css';

const MinusButton = ({ isHovered, onClick }) => (
  <a
    className={classNames('MinusButton', {
      'MinusButton--hover': isHovered,
    })}
    onClick={onClick}
  >
    <span className="MinusButton__top" />
  </a>
);

MinusButton.propTypes = {
  isHovered: PropTypes.bool,
  onClick: PropTypes.func,
};

MinusButton.defaultProps = {
  isHovered: false,
  onClick: null,
};

export default MinusButton;
