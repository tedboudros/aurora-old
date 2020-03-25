import React from "react";
import "./Card.css";

const Card = props => {
  const { isSelected } = props;
  return (
    <div
      className={`mainMenu_card ${isSelected && "mainMenu_card_selected"}`}
    ></div>
  );
};

export default Card;
