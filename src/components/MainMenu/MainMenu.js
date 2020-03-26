import React, { useState } from "react";
import Card from "./components/Card/Card";
import "./MainMenu.css";

const games = [
  { title: "League Of Legends", url: "/images/leagueoflegends.png" },
  { title: "Apex Legends", url: "/images/apexlegends.png" },
  { title: "Counter Strike: Global Offensive", url: "/images/csgo.png" },
  { title: "PLAYERUNKNOWN’S BATTLEGROUNDS", url: "/images/pubg.jpg" }
];

const MainMenu = props => {
  const { setPage } = props;
  const [selectedGame, setSelectedGame] = useState(0);
  return (
    <div className="mainMenu">
      <span className="mainMenu_title">{games[selectedGame].title}</span>
      {games.map((game, i) => (
        <Card
          key={i.toString()}
          index={i}
          setPage={setPage}
          setIndex={setSelectedGame}
          image={game.url}
          isSelected={i === selectedGame}
        />
      ))}
    </div>
  );
};

export default MainMenu;
