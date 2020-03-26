import React, { useState } from "react";
import Card from "./components/Card/Card";
import "./MainMenu.css";

const { exec } = require("child_process");

const games = [
  { title: "League Of Legends", url: "/images/leagueoflegends.png" },
  { title: "Apex Legends", url: "/images/apexlegends.png" },
  { title: "Counter Strike: Global Offensive", url: "/images/csgo.png" },
  {
    title: "PLAYERUNKNOWN’S BATTLEGROUNDS",
    url: "/images/pubg.jpg",
    execute: () => {
      exec("ls -la", (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    }
  }
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
          execute={game.execute}
          image={game.url}
          isSelected={i === selectedGame}
        />
      ))}
    </div>
  );
};

export default MainMenu;
