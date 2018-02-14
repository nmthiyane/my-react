import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import {Menus} from '../Menus';
import {RaceCourse} from '../RaceCourse';
 
export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    };
  }

  //Adding users to the state
  populateUsers(users){
    this.setState({ users });
    console.log(this.state.users);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2 className="App-sub-title">Kurtosys Grads</h2>
        </header>
        <p className="App-intro">
        </p>
        <Menus 
          onPopulate = {this.populateUsers.bind(this)}
        />
        <RaceCourse 
          racingUsers = {this.state.users} 
        />
      </div>

    );
  }
}