import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const StyleWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

StyleWrapper.propTypes = {
  children: PropTypes.node,
};

StyleWrapper.defaultProps = {
  children: null,
};

export default StyleWrapper;
