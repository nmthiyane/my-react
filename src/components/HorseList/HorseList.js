/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for creating multiple horse components
 */
import React from 'react';
import {Horse} from '../Horse';
import './HorseList.css';

export class HorseList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            horsesArray: []
        }
        
        this.declareWinner = this.declareWinner.bind(this);
        this.addFinishedHorse = this.addFinishedHorse.bind(this);

    }

    //Prints out the winner
    declareWinner(){
        alert('winner '+ this.state.horsesArray[0]);
    }

    //As soon as a horse completes the race, it is added to the horse list
    addFinishedHorse(horse){
        console.log(horse);
        this.setState({horsesArray: this.state.horsesArray.concat(horse)});
        //once all the horses have completed racing, the winner is declared
        if(this.state.horsesArray.length === (this.props.allHorses).length -1){
            this.declareWinner();
            console.log(this.state.horsesArray.length);
        }
    }
    render() {
        return (
            //Calling the hourse object
             <div className = 'ListDiv'>
                {this.props.allHorses.map( (horse, i) => 
                    <Horse 
                        avatarUrl = {horse['avatarUrl']}
                        username = {horse['name']}
                        startGame = {this.props.startGame}
                        addFinishedHorse  = {this.addFinishedHorse }
                    />
                )}
            </div>
        );
    }
}