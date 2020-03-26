import React from 'react';
import Time from './components/Time/Time';
import User from './components/User/User';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <User />
      <Time />
    </div>
  );
};

export default Header;
