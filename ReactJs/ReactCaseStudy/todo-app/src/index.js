import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import './Style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HomePage />
  </ThemeProvider>

);
