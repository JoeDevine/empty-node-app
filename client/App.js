import { hot } from 'react-hot-loader/root';
import { Main } from './components/Templates';
import StyleWrapper from './StyleWrapper';
import Routes from './Routes';

const App = () => (
  <div>
    <title>Example Application</title>
    <meta name="description" content="Example Application" />
    <meta name="charSet" charSet="utf-8" />
    <meta name="keywords" content="application" />
    <meta
      name="viewport"
      content="minimum-scale=1,initial-scale=1, width=device-width, shrink-to-fit=no"
    />
    <link rel="icon" href="static/favicon.ico" />
    <link rel="apple-touch-icon" href="static/favicon.ico" />
    <StyleWrapper>
      <Main>
        <Routes />
      </Main>
    </StyleWrapper>
  </div>
);

export default hot(App);
