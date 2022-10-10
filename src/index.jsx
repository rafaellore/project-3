import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/Home';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
