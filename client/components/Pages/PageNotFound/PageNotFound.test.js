import { renderWithTheme } from '../../../utils/test-utils/test-utils';
import PageNotFound from './PageNotFound';

describe('Given default props', () => {
  let wrapper;
  const location = {
    key: 'te5t',
    pathname: '/testpage',
    search: '?some=search-string',
    hash: '#test',
    state: { fromTest: true },
  };
  beforeEach(() => {
    wrapper = renderWithTheme(<PageNotFound location={location} />);
  });
  it('should render correctly', () => {
    expect(wrapper).toBeDefined();
  });
  it('should state that intended route could not be found', () => {
    expect(
      wrapper.getByText(`${location.pathname} could not be found`),
    ).toBeDefined();
  });
});
