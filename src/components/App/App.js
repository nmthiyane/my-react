import React, { Component } from 'react';
import logo from '../../images/horse.png';
import './App.css';
import {Menus} from '../Menus';
import {HorseList} from '../HorseList';
import {RandomHorses} from '../../Extras/RandomHorses.js';
 
export class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      noOfHorses: 2,
      start: false,
      racingHorses: []
    };

    this.populateUsers = this.populateUsers.bind(this);
    this.startGame = this.startGame.bind(this);
    this.returnRandomHorses = this.returnRandomHorses.bind(this);
  }

  //Calls the JS files that generate uses read from the json file
  returnRandomHorses(horses){
    return RandomHorses(horses);
  }

  componentDidMount(){
    this.setState({racingHorses: this.returnRandomHorses(2)});
  }

  //update number of horses
  populateUsers(noOfHorses){
    this.setState({noOfHorses, racingHorses: this.returnRandomHorses(noOfHorses)});
  }

  //Update start game state
  startGame(start){
    this.setState({start});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Kurtosys Race Track</h1>
          <h2 className="App-sub-title">Let the best man win</h2>
        </header>
        <p className="App-intro">
        </p>
        <div className = 'Components'>
          <Menus 
            onPopulate = {this.populateUsers}
            onStart = {this.startGame}
          />
          <HorseList 
            noOfHorses = {this.state.noOfHorses}
            allHorses = {this.state.racingHorses}
            startGame = {this.props.start}
          />
        </div>
      </div>

    );
  }
}