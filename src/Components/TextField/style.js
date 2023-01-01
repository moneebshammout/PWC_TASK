import styled from 'styled-components';

export default styled.input`
  font-size: 1rem;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  display: flex;
  color: black;
  border: 0.13rem solid black;
  border-bottom: 0.1rem solid black;
  border-right: 0.1rem solid black;
  border-radius: 0.5rem;
  border-color: ${({ theme }) => (theme === 'normal' ? `black` : 'red')};
  padding-left: 1rem;
  ::placeholder {
    color: grey;
  }
`;
