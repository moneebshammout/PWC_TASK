import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${colors.lightBlue};
  border-radius: 0.5rem;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  font-weight: 400;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;

  :hover {
    font-weight: 700;
  }
`;
