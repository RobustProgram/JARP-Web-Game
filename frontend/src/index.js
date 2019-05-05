import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import manifestReducer from './components/redux-reducers/manifest-reducer';
import optionsReducer from './components/redux-reducers/options-reducer';

// Import theme styles
import "./styles/theme.scss";

const allReducers = combineReducers({
  manifest: manifestReducer,
  options: optionsReducer
});

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
