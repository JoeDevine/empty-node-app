import React from 'react';
import styled from 'styled-components';
import ReactRouterPropTypes from 'react-router-prop-types';

const Wrap404 = styled.div`
  font-size: 24px;
`;

const PageNotFound = ({ location }) => (
  <Wrap404>
    <span>{`${location.pathname} could not be found`}</span>
  </Wrap404>
);

PageNotFound.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default PageNotFound;
