import { combineReducers } from 'redux';
import userReducer from './UserReducer';

const RootReducer = combineReducers({
  // Add reducers here
  user: userReducer,
});

export default RootReducer;
