import React from 'react';
import { Link } from "react-router-dom"

// function Navbar({ currentPage, setCurrentPage }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => setCurrentPage('Home')}
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => setCurrentPage('About')}
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About Me 
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => setCurrentPage('Portfolio')}
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           onClick={() => setCurrentPage('Resume')}
//           className={currentPage === 'Reseme' ? 'nav-link active' : 'nav-link'}
//         >
//           Reseme
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => setCurrentPage('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="flex-row">
      <li className="mx-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-2">
          <Link to="/about">About Me</Link>
        </li>
        <li className="mx-2">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-2">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="mx-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
