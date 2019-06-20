import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper black center">
                        <link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
                        <h1>Anime Memory Game</h1>

                    </div>
                </nav>

                    <div className="row">
                        <div className="col s12 m12 l12">
                            <div className="card" style={{  }}>
                                <div className="card-content center">
                                    <h4>Click on an image to earn points.</h4>
                                    <h4>Make sure not to click on an image more than once!</h4>
                                    <div className="scores">
                                        <p id="score">Score: {this.props.currentScore} | High Score: {this.props.topScore}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Navbar;