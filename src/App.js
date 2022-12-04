import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React from "react";

import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';

function App() {
  return (
    <div className="app">
      <Router>
        <Header>
          <Navbar/>
        </Header>
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
