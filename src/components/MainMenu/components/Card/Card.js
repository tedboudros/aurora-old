import React from "react";
import "./Card.css";

const Card = props => {
  const {
    isSelected,
    setIndex,
    index,
    image,
    setPage,
    command,
    execute
  } = props;
  return (
    <div
      className={`mainMenu_card ${isSelected && "mainMenu_card_selected"}`}
      onMouseEnter={() => {
        setIndex(index);
      }}
      onClick={() => {
        setPage("loading", { command });
        execute && execute();
      }}
      style={image && { backgroundImage: `url(${image})` }}
    />
  );
};

export default Card;
