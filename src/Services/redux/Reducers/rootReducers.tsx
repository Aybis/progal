import { combineReducers } from 'redux';
import userReducer from './user';

const reducer = combineReducers({
  // Add reducers here
  user: userReducer,
});

export default reducer;
