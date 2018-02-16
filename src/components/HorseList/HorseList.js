/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for creating multiple horse components
 */
import React from 'react';
import {Horse} from '../Horse';
import './HorseList.css';

export class HorseList extends React.Component{
    render() {
        return (
            //Calling the hourse object
             <div className = 'ListDiv'>
                {this.props.allHorses.map( (horse, i) => 
                    <Horse 
                        avatarUrl = {horse['avatarUrl']}
                        username = {horse['name']}
                        startGame = {this.props.startGame}
                    />
                )}
            </div>
        );
    }
}