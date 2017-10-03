import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; // attaches our store to our react container components
import AppContainer from './AppContainer';
import './index.css';
import store, { AppRouter} from './js/store/storeConfig';



render((
    <Provider store={store}>
        <AppRouter>
            <AppContainer />
        </AppRouter>
    </Provider>
   ),document.getElementById('root')
);