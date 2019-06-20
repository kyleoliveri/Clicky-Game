import React, { useEffect, Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import anime from './anime.json';

import Navbar from './components/Navbar/Navbar.js';
import CharacterCard from './components/CharacterCard/CharacterCard.js';
import Wrapper from './components/Wrapper/Wrapper.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
    // Setting this.state.anime to the anime json array
    state = {
      anime,
      selected: [],
      topScore: 0,
      currentScore: 0
    };
  
    updateSelected = name => {
      if (this.state.selected.indexOf(name) > -1) {
        alert("You Lose, try again.")
        this.setState({ selected: [], currentScore: 0 })
  
        if (this.state.currentScore > this.state.topScore) {
          this.setState({ topScore: this.state.currentScore })
        }
  
        this.setState({ score: 0 })
  
        return;
      } else {
        var currentScore = this.state.currentScore;
        currentScore++;
  
        if (currentScore > this.state.topScore) {
          this.setState({ topScore: currentScore })
        }
        this.setState({ currentScore: currentScore })
      }
  
      let selected = this.state.selected
      selected.push(name)
      this.setState({ selected })
    }
  
    randomImage = () => {
      const tempArr = [];
      while (tempArr.length !== anime.length) {
        let image = anime[Math.floor(Math.random() * anime.length)];
        if (tempArr.indexOf(image) < 0) {
          tempArr.push(image)
        }
      }
      return tempArr
    }
  
    // Map over this.state.anime and render a CharacterCard component for each character object
    render() {
      return (
  
        <Wrapper>
          <Navbar currentScore={this.state.currentScore} topScore={this.state.topScore} />
          {this.randomImage().map(img => (
            <CharacterCard
              updateSelected={this.updateSelected}
              name={img.name}
              image={img.image}
            />
          ))}
        <Footer />
        </Wrapper>
      );
    }
  }

export default App;
