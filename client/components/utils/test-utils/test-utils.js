import React from 'react';
import PropTypes from 'prop-types';
import { render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import StyleWrapper from '../../StyleWrapper';

// Helper function for mocking GraphQL calls
const wait = async (ms = 0) => {
  await act(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
};

const wrapRenderer = (renderFunction, component, options) => {
  const { wrapper: AdditionalWrapper, routerEntries } = options;

  const WrappedMocks = ({ children }) => (
    <StyleWrapper>
      <MemoryRouter initialEntries={routerEntries}>
        {AdditionalWrapper ? (
          <AdditionalWrapper>{children}</AdditionalWrapper>
        ) : (
          <>{children}</>
        )}
      </MemoryRouter>
    </StyleWrapper>
  );
  WrappedMocks.propTypes = {
    children: PropTypes.node,
  };

  return renderFunction(component, { wrapper: WrappedMocks });
};

const renderWithTheme = (component, { wrapper, routerEntries } = {}) =>
  wrapRenderer(render, component, { wrapper, routerEntries });

const renderHookWithTheme = (hook, { wrapper, routerEntries } = {}) =>
  wrapRenderer(renderHook, hook, { wrapper, routerEntries });

export { renderWithTheme, renderHookWithTheme, wait };
