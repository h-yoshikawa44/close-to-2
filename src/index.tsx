import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-snapshot';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <App />,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();