import React from 'react';

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => setCurrentPage('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => setCurrentPage('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me 
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => setCurrentPage('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => setCurrentPage('Resume')}
          className={currentPage === 'Reseme' ? 'nav-link active' : 'nav-link'}
        >
          Reseme
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => setCurrentPage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
