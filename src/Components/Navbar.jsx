import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">All</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/career">CAREER</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cyberSecurity">CYBER SECURITY</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dataScience">DATA SCIENCE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fullStack">FULL STACK</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
