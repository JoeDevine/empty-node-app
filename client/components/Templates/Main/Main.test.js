import { renderWithTheme } from '../../../utils/test-utils/test-utils';
import Main from './Main';

describe('Given children provided', () => {
  let main;
  beforeEach(() => {
    main = renderWithTheme(
      <Main>
        <div>Child component</div>
      </Main>,
    );
  });

  it('should render the children correctly', () => {
    const child = main.getByText('Child component');
    expect(child).toBeDefined();
  });
});
