import {
  FETCH_GAMES_ERROR,
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS
} from './action.types';

const fetchGamesStart = () => ({
  type: FETCH_GAMES_START
});
const fetchGamesError = () => ({
  type: FETCH_GAMES_ERROR
});
const fetchGamesSuccess = (data) => ({
  type: FETCH_GAMES_SUCCESS,
  data
});

// eslint-disable-next-line import/prefer-default-export
export const fetchGames = () => {
  return async (dispatch) => {
    try {
      const games = [
        { title: 'League Of Legends', url: '/images/leagueoflegends.png' },
        { title: 'Apex Legends', url: '/images/apexlegends.png' },
        { title: 'Counter Strike: Global Offensive', url: '/images/csgo.png' },
        { title: 'PLAYERUNKNOWN’S BATTLEGROUNDS', url: '/images/pubg.jpg' }
      ];
      dispatch(fetchGamesStart());
      dispatch(fetchGamesSuccess(games));
    } catch (err) {
      console.err(err);
      dispatch(fetchGamesError());
    }
  };
};
