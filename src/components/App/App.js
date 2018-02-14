import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import {Menus} from '../Menus';
import {HorseList} from '../HorseList';
 
export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      noOfHorses: 2
    };
  }

  //update number of horses
  populateUsers(noOfHorses){
    this.setState({noOfHorses });
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
            onPopulate = {this.populateUsers.bind(this)}
          />
          <HorseList 
            noOfHorses = {this.state.noOfHorses} 
          />
        </div>
      </div>

    );
  }
}