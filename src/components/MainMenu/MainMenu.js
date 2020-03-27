import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './components/Card/Card';
import './MainMenu.css';
import { fetchGames } from '../../store/actions/games.actions';
import ControllerHOC from '../ControllerInput/ControllerInput';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useCompare = (val) => {
  const prevVal = usePrevious(val);
  return prevVal !== val;
};

const MainMenu = (props) => {
  const { setPage, x } = props;
  const [selectedGame, setSelectedGame] = useState(0);
  const hasXChanged = useCompare(x);
  useEffect(() => {
    if (hasXChanged) {
      setSelectedGame(x - 1);
    }
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);
  const games = useSelector((state) => state.games.games);
  return (
    <div className="mainMenu">
      <span className="mainMenu_title">{games[selectedGame]?.title}</span>
      {games?.map((game, i) => (
        <Card
          key={i.toString()}
          index={i}
          setPage={setPage}
          setIndex={setSelectedGame}
          execute={game.execute}
          image={game.url}
          isSelected={i === selectedGame}
        />
      ))}
    </div>
  );
};

export default ControllerHOC(MainMenu, 4);
