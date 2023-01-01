import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

/**
 * Button component.
 *
 * @param {Object} props Component props.
 * @param {Function} props.onClick Click event handler.
 * @param {string} props.text Text inside the button.
 *
 * @return {Element}
 */
export default function Button({ onClick, text }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: null,
};
