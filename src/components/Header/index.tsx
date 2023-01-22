import React from 'react';
import './index.css';
import searchIcon from '../../assets/magnifier.png';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  searchText: string;
  setSearchText: (arg0: string) => void;
}

const Header = (props: IHeaderProps) => {
  
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1>ShowFlix</h1>
        </Link>
      </div>
      <div className="search-box">
        <img src={searchIcon} height="24px" />
        <input
          type="text"
          onChange={(e) => props.setSearchText(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Header