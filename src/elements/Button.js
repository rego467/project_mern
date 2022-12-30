import React from 'react'
import PropTypes from 'prop-types';

export default function Button() {
  return (
    <div>Button</div>
  )
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "link"]),
  onclick: PropTypes.func,
  target: PropTypes.string,
  className: PropTypes.string,
  isDisable: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  hasShadow: PropTypes.bool
}