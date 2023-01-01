import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './style';

/**
 * Spinner component.
 *
 * @return {Element}
 */
export default function Title({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
