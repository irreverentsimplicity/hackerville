// store/reducers/index.js
import { combineReducers } from 'redux';
import flippandoReducer from './hackervilleSlice';

const rootReducer = combineReducers({
  flippando: flippandoReducer,
});

export default rootReducer;

