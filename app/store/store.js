import { configureStore, combineReducers } from '@reduxjs/toolkit';

import hackervilleReducer from '../slices/hackervilleSlice.js';

const combinedReducer = combineReducers({
  hackerville: hackervilleReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
