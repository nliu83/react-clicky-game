import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters, 
    score: 0, 
    highScore: 0
  };

  // Map over this.state.characters and render a CharCard component for each character object
  render() {
    return (
      <Wrapper>
        <Header score= {this.state.score} highScore={this.state.highScore}> Clicky Game 
        </Header>
        {this.state.characters.map(characters => (
          <CharCard

            clickCount = {this.clickCount}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
            occupation={characters.occupation}
            location={characters.location}
          />
        ))}
      </Wrapper>
    );
  }

  gameOver = () => {

    // seeing if score is greater than highscore, if yes, setting new highscore
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.characters.forEach(character => {
      character.count = 0;
    });

    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  
  clickCount = id => {
    this.state.characters.find((o, i) => {
      if (o.id === id) {
        if(characters[i].count === 0){
          characters[i].count = characters[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.characters.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  
};


export default App;
