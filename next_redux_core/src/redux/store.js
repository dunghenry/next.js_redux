import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from './logger';
const middleware = [thunk];
const store = createStore(
    logger(rootReducer),
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;