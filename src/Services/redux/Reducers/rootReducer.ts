import { combineReducers } from 'redux';
import hasMitraReducer from './HasMitraReducer';
import { inisiasiReduccer } from './InisiasiReducer';
import projectReducer from './ProjectReducer';
import userReducer from './UserReducer';
import vendorReducer from './VendorReducer';

const RootReducer = combineReducers({
  // Add reducers here
  user: userReducer,
  inisiasi: inisiasiReduccer,
  project: projectReducer,
  vendor: vendorReducer,
  hasMitra: hasMitraReducer,
});

export default RootReducer;
