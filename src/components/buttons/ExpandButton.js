import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ExpandButton.css';

const ExpandButton = ({ isHovered, onClick }) => (
  <a
    className={classNames('ExpandButton', {
      'ExpandButton--hover': isHovered,
    })}
    onClick={onClick}
  >
    <span className="ExpandButton__top" />
    <span className="ExpandButton__bottom" />
  </a>
);

ExpandButton.propTypes = {
  isHovered: PropTypes.bool,
  onClick: PropTypes.func,
};

ExpandButton.defaultProps = {
  isHovered: false,
  onClick: null,
};

export default ExpandButton;
