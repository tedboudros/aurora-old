import React from 'react';
import Controller from './components/Controller/Controller';
import Keyboard from './components/Keyboard/Keyboard';
import './Controllers.css';

const Controllers = () => {
  const controllers = false;
  return (
    <div className="controllers">
      {controllers ? (
        <>
          <Controller />
          <Controller isDisabled />
          <Controller isDisabled />
          <Controller isDisabled />
        </>
      ) : (
        <Keyboard />
      )}
    </div>
  );
};

export default Controllers;
