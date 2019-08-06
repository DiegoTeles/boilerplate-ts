import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';

// import Main from './pages/Main';
import App from './App';

/* Styles */
import './assets/css/app.css';

ReactDOM.render(<App />, document.getElementById('root'));
