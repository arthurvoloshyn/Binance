import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.svg';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} height="25" alt="Binance Logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <span className="small text-white">Trade history viewer web app</span>
      </div>
    </nav>
  </header>
);

export default Header;
