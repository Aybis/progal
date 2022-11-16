import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/rootReducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
