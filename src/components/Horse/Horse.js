/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for rendering a single horse
 */
import React from 'react';
import './Horse.css';

export class Horse extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            interval: 0,
            progress: 0,
            isFinish: false
        }
        this.startTimer = this.startTimer.bind(this);
        this.addToFinish = this.addToFinish.bind(this);
        this.incrementProgress = this.incrementProgress.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    componentDidMount(){
        this.setState({interval: (Math.floor(Math.random()* 4000) + 1)});
    }

    //This function will generate a random increment to each horse progress
    incrementProgress(){
        if(this.state.progress>100){
            return
        }
        this.setState({progress: this.state.progress + 1})
        console.log(this.props.username + ' ' + this.state.progress);
        console.log(this.props.username + ' ' + this.state.interval);

    }

    startTimer(){
        setInterval(this.incrementProgress, this.state.interval);
    }

    //alert the parent that the horse has completed the race
    addToFinish(username){
        this.setState({isFinish: true});
        this.props.addFinishedHorse(username);
    }

    //Update the state when the game is restarted
    handleRestart(){
        this.setState({progress: 0});
        this.setState({isFinish: false});
    }
    
    render(){
        //Checks if the game has started
        if(this.props.startGame && this.state.progress < 100){
            console.log(this.props.startGame + ' ' + this.state.progress);
            this.startTimer();
        }
        //once the horse completes the horse, declare as finish and alert the parent
        else if(this.state.progress >=100 && !this.state.isFinish){
            this.addToFinish(this.props.username);
        }
        //when game is restarted, changed the progress to 0. 
        else if(!this.props.startGame && this.state.progress !== 0){
            this.handleRestart();
        }

        return (
                <div className = 'HorseDiv'>
                    <h4 className = 'Horse Name'>
                        {this.props.username}
                    </h4>
                    <img 
                        src = {this.props.avatarUrl}
                        alt = 'Horse avatar'
                    />
                    <progress value={this.state.progress} max="100"></progress> 
                </div>
        );
    }
}