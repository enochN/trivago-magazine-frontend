import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from "./sagas";
import history from './history';
import {routerMiddleware} from "react-router-redux";

// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
    return typeof window === 'object'
    && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;
};

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));

const composedStoreEnhancer = compose(middleware, reduxDevTool());

const store = composedStoreEnhancer(createStore)(reducers);

sagaMiddleware.run(sagas);

export default store;