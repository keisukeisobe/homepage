import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
const classNames = require('classnames');

function Navbar() {
  const [closed, setClosed] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  const handleScrollPosition = () => {
    setScrollPosition(window.pageYOffset);
    console.log(scrollPosition);
    if (scrollPosition > 100){
      setClosed(false);
    } else {
      setClosed(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPosition);
    return function cleanup() {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  });

  return (
    <header 
      className={classNames({
        closed: closed,
        open: !closed
      })}
    >
      <nav role="navigation" className="navbar">
        <Link className="navbar-link" to="#about">About Kei</Link>
        <Link className="navbar-link" to="#projects">Projects</Link>
        <Link className="navbar-link" to="#resume">Resume</Link>
        <Link className="navbar-link" to="#contact">Contact Me</Link>
        <Link className="navbar-link" to="/other">Other Stuff</Link>
      </nav>    
    </header>
  )
}

export default Navbar;