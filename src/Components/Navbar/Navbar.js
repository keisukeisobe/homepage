import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
// const classNames = require('classnames');

function Header() {
  const [state, setState] = useState('closed');


  
  return (
    <header className="header">
      <nav role="navigation" className="navbar">
        <Link className="navbar-link" to="/about">About Kei</Link>
        <Link className="navbar-link" to="/projects">Projects</Link>
        <Link className="navbar-link" to="/resume">Resume</Link>
        <Link className="navbar-link" to="/contact">Contact Me</Link>
        <Link className="navbar-link" to="/other">Other Stuff</Link>
      </nav>    
    </header>

  )
}