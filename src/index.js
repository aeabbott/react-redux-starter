import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux'; // attaches our store to our react container components
import App from './App';
import './index.css';
import { configureStore, AppRouter} from './js/store/storeConfig';


const store = configureStore()

render(
    <Provider store={store}>
        <AppRouter>
            <App />
        </AppRouter>
    </Provider>,
    document.getElementById('root')
);