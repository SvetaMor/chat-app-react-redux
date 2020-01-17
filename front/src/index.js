import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/App/AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <AppContainer />,
   document.getElementById('root')
);

serviceWorker.unregister();
