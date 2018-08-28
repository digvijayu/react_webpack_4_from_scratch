import React from 'react';
import './App.scss'
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'

const render = () =>
  ReactDOM.render(
    <HashRouter>
      <App/>
    </HashRouter>,
    document.getElementById('index'));

render();
