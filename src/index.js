import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/array';
import 'raf/polyfill';
// import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './js/App';
import * as serviceWorker from './js/serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
