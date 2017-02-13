import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import initialState from './store/initial_state';

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App state={initialState} />, document.getElementById('__APP__'));
