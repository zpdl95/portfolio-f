import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { SanityContextProiver } from './context/SanityContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SanityContextProiver>
      <App />
    </SanityContextProiver>
  </React.StrictMode>,
  document.getElementById('root')
);
