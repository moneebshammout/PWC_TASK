import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledSpinner from './style';

/**
 * Loading spinner component.
 *
 * @return {Element}
 */
export default function CustomSpinner() {
  return (
    <StyledSpinner>
      <Spinner animation="grow" variant="primary" />
    </StyledSpinner>
  );
}
