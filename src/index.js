import React from 'react';
import './App.scss'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers'
import App from './App';
import { HashRouter } from 'react-router-dom'

const store = createStore(rootReducer)

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>,
    document.getElementById('index'));

render();
