import React from "react";
import "./Card.css";

const Card = props => {
  const { isSelected, setIndex, index, image, setPage, command } = props;
  return (
    <div
      className={`mainMenu_card ${isSelected && "mainMenu_card_selected"}`}
      onMouseEnter={() => {
        setIndex(index);
      }}
      onClick={() => {
        setPage("loading", { command });
      }}
      style={image && { backgroundImage: `url(${image})` }}
    />
  );
};

export default Card;
