import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Header from './Header';
import Home from './Home';
import './index.css';

export default () =>
  <Provider store={store}>
    <div className="container">
      <Header />
      <Home />
    </div>
  </Provider>;
