import { extendTheme, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from  './App'
import { mode } from '@chakra-ui/theme-tools'
const config = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          color: mode('black', 'whiteAlpha.900')(props),
          bg: mode('white', 'black')(props),
        },
      })
    }
  })
ReactDOM.render(
  <StrictMode>
    <ColorModeScript theme={config} />
        <App/>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
