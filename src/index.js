import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {theme} from './theme.js';
import { ThemeProvider } from '@material-ui/core/styles';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
          <App />
    </ThemeProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
