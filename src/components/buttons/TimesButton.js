import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TimesButton.css';

const TimesButton = ({ isHovered, onClick }) => (
  <a
    className={classNames('TimesButton', {
      'TimesButton--hover': isHovered,
    })}
    onClick={onClick}
  >
    <span className="TimesButton__top" />
    <span className="TimesButton__bottom" />
  </a>
);

TimesButton.propTypes = {
  isHovered: PropTypes.bool,
  onClick: PropTypes.func,
};

TimesButton.defaultProps = {
  isHovered: false,
  onClick: null,
};

export default TimesButton;
