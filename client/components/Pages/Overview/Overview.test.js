import { renderWithTheme } from '../../../utils/test-utils/test-utils';
import Overview from './Overview';

describe('Given default props', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderWithTheme(<Overview />);
  });

  it('should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render the overview page title correctly', () => {
    expect(wrapper.getByText('Overview Page')).toBeDefined();
  });
});
