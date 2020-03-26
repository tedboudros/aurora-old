import React, { useState } from 'react';
import Main from './pages/Main';
import Loading from './pages/Loading';
import Notification from './components/Notification/Notification';
import './App.css';

const transition = 120;

const App = () => {
  const [closing, setClosing] = useState('');
  const [page, setPage] = useState('main');
  const [cursor, setCursor] = useState(true);
  const setPageWithTransition = (value) => {
    setClosing(page);
    if (value === 'loading') {
      setCursor(false);
    }
    setTimeout(() => {
      setPage(value);
    }, transition);
  };

  const pages = {
    main: <Main setPage={setPageWithTransition} isClosing={closing === 'main'} />,
    loading: <Loading setPage={setPageWithTransition} isClosing={closing === 'loading'} />
  };

  return (
    <div className={cursor ? 'cursor' : 'cursor_none'}>
      <Notification type="success" message="Menu Loaded" show />
      {pages[page]}
    </div>
  );
};

export default App;
