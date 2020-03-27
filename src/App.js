import React, { useState } from 'react';
import Main from './pages/Main';
import Loading from './pages/Loading';
import Notification from './components/Notification/Notification';
import './App.css';

const transition = 120;
const notificationTimeOut = 3000;
const App = () => {
  const [notification, setNotification] = useState({
    type: 'success',
    message: 'gfd adsf asdflkj alk ja lkja jnhdfs adojf a fas fasj jajsodf '
  });

  const showNotification = (type, message) => {
    setNotification({ type, message, show: true });
    setTimeout(() => {
      setNotification({ type, message, show: false });
    }, notificationTimeOut);
  };

  const [closing, setClosing] = useState('');
  const [page, setPage] = useState('main');
  const [cursor, setCursor] = useState(true);

  const setPageWithTransition = (value) => {
    setClosing(page);
    showNotification('success', 'Launching...');
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
      <Notification notification={notification} />
      {pages[page]}
    </div>
  );
};

export default App;
