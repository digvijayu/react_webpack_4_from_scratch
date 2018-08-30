import React from 'react';
import './App.scss'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers'
import App from './App';
import { HashRouter } from 'react-router-dom'
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";

const messages = {
    'de': messages_de,
    'en': messages_en
};

addLocaleData([...locale_en, ...locale_de]);
const language = navigator.language.split(/[-_]/)[0];  // language without region code

const store = createStore(rootReducer)

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <IntlProvider locale={language} messages={messages[language]}>
          <App/>
        </IntlProvider>
      </HashRouter>
    </Provider>,
    document.getElementById('index'));

render();
