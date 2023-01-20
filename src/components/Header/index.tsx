import React from 'react';
import './index.css';
import searchIcon from '../../assets/magnifier.png';

const Header = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <h1>ShowFlix</h1>
      </div>
      <div className='search-box'>
        <img src={searchIcon} height="24px" />
        <input type="text" />
      </div>
    </nav>
  );
}

export default Header