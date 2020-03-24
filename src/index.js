import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './styles/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
