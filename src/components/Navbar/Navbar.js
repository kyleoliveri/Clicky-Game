import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="row">
                <div className="black white-text col sm12 m12 l12">
                    <link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
                    <div className="">
                        <h1>Anime Memory Game</h1>
                        <h4>Click on an image to earn points.</h4>
                        <h4>Make sure not to click on an image more than once!</h4>
                    </div>
                    <div className="scores">
                        <p id="score">Score: {this.props.currentScore} | High Score: {this.props.topScore}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;