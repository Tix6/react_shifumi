import { combineReducers } from 'redux';
import human from './human';
import computer from './computer';
import game from './game';

const rootReducer = combineReducers({
  human,
  computer,
  game,
});

export default rootReducer;
