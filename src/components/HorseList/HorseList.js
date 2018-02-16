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
            interval: 2,
            progress: 0
        }
    }

    render() {
        if(this.props.startGame){
            let progress =  this.state.progess+30;
            this.setState({progress});
            this.props.onStart(false);
        }
        
        console.log(this.props.startGame);
        return (
            //Calling the hourse object
             <div className = 'ListDiv'>
                {this.props.allHorses.map( (horse, i) => 
                    <Horse 
                        avatarUrl = {horse['avatarUrl']}
                        username = {horse['name']}
                        progress = {this.state.progress}
                    />
                )}
            </div>
        );
    }
}