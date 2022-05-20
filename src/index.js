import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from "@mantine/core"
import { theme } from "./theme"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>

);
