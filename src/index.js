import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux'; // attaches our store to our react container components
import App from './App';
import './index.css';
import configureStore from './js/store/storeConfig';

const store = configureStore()

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);