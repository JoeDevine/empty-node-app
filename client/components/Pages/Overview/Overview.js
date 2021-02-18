import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100vw;
  min-height: 50vh;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font};
  font-weight: ${({ theme }) => theme.text.weight};
  font-size: 2rem;

  p :hover {
    text-shadow: 1px 1px 3px ${({ theme }) => theme.colours.secondary};
    cursor: pointer;
  }
`;

const Overview = () => (
  <Wrapper id="#overview-page">
    <p>Overview Page</p>
  </Wrapper>
);

export default Overview;
