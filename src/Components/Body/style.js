import styled from 'styled-components';

export const MapWrapper = styled.div`
  .map-container {
    height: 30rem;
    width: 70rem;
  }
  margin-left: 25rem;
  margin-top: 5rem;
  width: 70rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 2rem;
  margin-top: 1rem;
  width: 18rem;

  > {
    :first-child {
      flex: 2;
    }
    &:nth-child(2) {
      flex: 1;
    }
  }
`;

export const TitleWrapper = styled.div`
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  border-radius: 50px;
  box-shadow: 31px 31px 61px #bebebe, -31px -31px 61px #ffffff;
  height: 8rem;
  margin-left: 3rem;
  margin-top: 3rem;
  padding-top: 2rem;
  text-align: center;
  width: 20rem;
`;
