import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';

// import Main from './pages/Main';
import Users from './pages/Users';

/* Styles */
import './assets/css/app.css';

ReactDOM.render(
  <Provider store={store}>
    <Users />
  </Provider>,
  document.getElementById('root')
);
