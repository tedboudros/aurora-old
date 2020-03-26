import update from 'immutability-helper';
import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR
} from '../actions/action.types';

const initialState = {
  games: [],
  isLoading: false
};

const fetchGamesError = (state) => {
  return update(state, {
    games: { $set: [] }
  });
};
const fetchGamesStart = (state) => {
  return update(state, {
    isLoading: { $set: true }
  });
};
const fetchGamesSuccess = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    games: { $set: action.data }
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_ERROR:
      return fetchGamesError(state);
    case FETCH_GAMES_START:
      return fetchGamesStart(state);
    case FETCH_GAMES_SUCCESS:
      return fetchGamesSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
