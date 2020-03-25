import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.svg';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} height="25" alt="Binance Logo" />
      </Link>

      <div className="navbar-text">
        <span className="small text-white">Trade history viewer web app</span>
      </div>
    </nav>
  </header>
);

export default Header;
