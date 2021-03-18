import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import home from './reducers/home.reducer';
// import setAuthToken from './utils/setAuthToken';
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

const initialState = {};

const middleware = [thunk];

const store = createStore(
    home,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware, loggerMiddleware))
);


export default store;