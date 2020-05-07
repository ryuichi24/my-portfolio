import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import libraries
import { BrowserRouter as Router } from 'react-router-dom';

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-PBNDLGB'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
