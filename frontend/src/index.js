import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { toast } from 'react-toastify';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import manifestReducer from './components/redux-reducers/manifest-reducer';
import optionsReducer from './components/redux-reducers/options-reducer';
import levelReducer from './components/redux-reducers/level-reducer';

// Import theme styles
import "./styles/theme.scss";
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure();

const allReducers = combineReducers({
  manifest: manifestReducer,
  options: optionsReducer,
  level: levelReducer
});

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
