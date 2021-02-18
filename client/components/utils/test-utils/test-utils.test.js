import { useState } from 'react';
import PropTypes from 'prop-types';
import { renderHookWithTheme, renderWithTheme, wait } from './test-utils';

const TestWrapper = ({ children }) => <div>{children}</div>;

TestWrapper.propTypes = {
  children: PropTypes.node,
};

describe('renderHookWithTheme util', () => {
  const useCustomHook = () => {
    const state = useState();
    return state;
  };
  it('should render a hook when passed with no options', async () => {
    const result = renderHookWithTheme(useCustomHook);
    await wait();
    expect(result).toBeDefined();
  });
});

describe('renderWithTheme util', () => {
  const Component = <div />;

  it('should render when passed with no additional Wrapper', () => {
    expect(renderWithTheme(Component)).toBeDefined();
  });

  it('should render when passed with an additional Wrapper', () => {
    expect(renderWithTheme(Component, { wrapper: TestWrapper })).toBeDefined();
  });
});
