import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './components/Card/Card';
import './MainMenu.css';
import { fetchGames } from '../../store/actions/games.actions';

const MainMenu = (props) => {
  const { setPage } = props;
  const [selectedGame, setSelectedGame] = useState(0);
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

export default MainMenu;
