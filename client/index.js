import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from "./services/part.service.js"

import styles from './scss/application.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> ,
  document.getElementById('root')
);

serviceWorker.unregister();