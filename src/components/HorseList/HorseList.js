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

   ComponentWillMount(){
        if(this.props.startGame){
            let progress =  100;
            this.setState({progress});
            console.log("qerewrew" + this.state.progress);
            this.props.onStart(false);
        } 
        console.log("qerewrew" + this.state.progress);
   }

   ComponentDidMount(){
    if(this.props.startGame){
        let progress =  100;
        this.setState({progress});
        console.log("qerewrew" + this.state.progress);
        this.props.onStart(false);
    } 
    console.log("qerewrew" + this.state.progress);
    }

    render() {
        if(this.props.startGame && this.state.progress < 100){
            this.setState({progress: this.state.progress + 10});
        }

        console.log(this.state.progress);
        if(!this.props.startGame && this.state.progress == 100){
            this.setState({progress: this.state.progress - 100});
            console.log('here');
        }

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