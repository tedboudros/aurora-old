import React from 'react';
import GameController from './icons/game-controller.svg';
import './Controller.css';

const Controller = (props) => {
  const { isDisabled } = props;
  return (
    <img
      src={GameController}
      alt="gamecontroller"
      className={`controllers_controller ${isDisabled &&
        'controllers_controller_disabled'}`}
    />
  );
};

export default Controller;
