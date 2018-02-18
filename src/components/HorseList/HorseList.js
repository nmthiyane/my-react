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

        //will store the horses who finish the race in the order in which the finish
        this.state = {
            horsesArray: []
        }
        this.addFinishedHorse = this.addFinishedHorse.bind(this);
    }

    //As soon as a horse completes the race, it is added to the horse list
    addFinishedHorse(horse){
        this.setState({horsesArray: this.state.horsesArray.concat(horse)});
    }

    render() {
        return (
            //Calling the hourse object
             <div className = 'main-div'>
                <div className = 'Winner-div'>
                    <label>
                       Winner:
                    </label>
                    <label className = 'WinnerLabel' >
                    {this.state.horsesArray[0]}
                    </label>
                </div>                
                <div className = 'ListDiv'>
                    {this.props.allHorses.map( (horse) => 
                        <Horse 
                          avatarUrl = {horse['avatarUrl']}
                          username = {horse['name']}
                          startGame = {this.props.startGame}
                          addFinishedHorse  = {this.addFinishedHorse }
                    />
                    )}
                </div>
            </div>
        );
    }
}