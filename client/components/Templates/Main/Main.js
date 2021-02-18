import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMain = styled.main`
  position: relative;
  min-height: 100vh;
  padding: 0;
  display: grid;
  grid-template-rows: 64px 42px 1fr;
`;

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
