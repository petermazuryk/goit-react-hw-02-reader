import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';

const newApp = <App />;
const idRoot = document.querySelector('#root');
ReactDOM.render(newApp, idRoot);
