import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import RootReducer from './Reducers/rootReducer';

// const Store = createStore(
//   RootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk)),
// );

const Store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export type RootStore = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
