import { combineReducers } from 'redux';
import { inisiasiReduccer } from './InisiasiReducer';
import userReducer from './UserReducer';

const RootReducer = combineReducers({
  // Add reducers here
  user: userReducer,
  inisiasi: inisiasiReduccer,
});

export default RootReducer;
