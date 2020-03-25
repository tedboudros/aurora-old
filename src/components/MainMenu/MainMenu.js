import React, { useState } from "react";
import Card from "./components/Card/Card";
import "./MainMenu.css";

const games = [
  { title: "Game #1" },
  { title: "Game #2" },
  { title: "Game #3" },
  { title: "Game #4" },
  { title: "Game #5" },
  { title: "Game #6" }
];

const MainMenu = props => {
  const [selectedGame, setSelectedGame] = useState(4);
  return (
    <div className="mainMenu">
      <span className="mainMenu_title">{games[selectedGame].title}</span>
      {games.map((game, i) => (
        <Card isSelected={i === selectedGame} />
      ))}
    </div>
  );
};

export default MainMenu;
