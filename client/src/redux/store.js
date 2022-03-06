import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createStateSyncMiddleware } from 'redux-state-sync';
import { persistStore } from 'redux-persist';

import thunk from "redux-thunk"
import reducer from './reducer';
const environment = process.env.NODE_ENV || "development";
let isDevelopment = environment === "development";
isDevelopment = true;


const middleware = [thunk, createStateSyncMiddleware({ whitelist: ["START_UP"] })]

if (isDevelopment)
    [...middleware, createLogger()]

const enhancers = (isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
    reducer,
    enhancers(applyMiddleware(...middleware))
)
export const persistor = persistStore(store);
export default store