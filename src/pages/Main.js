import React from 'react';
import Header from '../components/Header/Header';
import MainMenu from '../components/MainMenu/MainMenu';
import BottomMenu from '../components/BottomMenu/BottomMenu';

const Main = (props) => {
  const { setPage, isClosing } = props;
  return (
    <div className={isClosing ? 'fadeOut' : undefined}>
      <Header />
      <MainMenu setPage={setPage} />
      <BottomMenu />
    </div>
  );
};

export default Main;
