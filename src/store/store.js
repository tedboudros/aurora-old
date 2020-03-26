import { combineReducers } from 'redux';
import gamesReducer from './reducer/games.reducer';

const mainReducer = combineReducers({
  games: gamesReducer
});

export default mainReducer;
