import React from 'react';
import {createStore, applyMiddleware, compose } from 'redux';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';
import  thunk  from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers/rootReducer';


const history = createBrowserHistory();
const appRouterMiddleware = routerMiddleware(history)

export function appConnectRouter(rootReducer) {
    return connectRouter(history)(rootReducer);
}

export const AppRouter = props => (
    <ConnectedRouter history={history}>
        {props.children}
    </ConnectedRouter>
);
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    appConnectRouter(rootReducer),
    composeEnhancers(applyMiddleware(thunk, appRouterMiddleware)),
);

export default store;
