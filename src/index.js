import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = () =>
  ReactDOM.render(
    <div>
      <App/>
    </div>,
    document.getElementById('index'));

render();
registerServiceWorker();
