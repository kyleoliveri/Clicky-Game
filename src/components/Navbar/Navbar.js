import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <link href="https://fonts.googleapis.com/css?family=Bangers|Julius+Sans+One&display=swap" rel="stylesheet"></link>
    <div className="Title">Anime Memory Game</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div className="Score">
      Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
    </div>
  </div>
);

export default Navbar;