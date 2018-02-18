import React from 'react';
import './Menus.css';
import start_icon from '../../images/start_icon.png';
import reset_icon from '../../images/reset_icon.png';


export class Menus extends React.Component{
    constructor(props){
        super(props);

        this.handleText = this.handleText.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
        this.handleResetGame = this.handleResetGame.bind(this);
    }

    handleText(event){
        const value = event.target.value;
        //Pass noOfHorses to parent
        if(value === ""){
            //Reset to default
            this.props.onPopulate(2);
        }
        else if(value < 2 || value > 9) {     
            alert('Number of horses must from 2 - 9');
        }
        else {
            this.props.onPopulate(value);
        }
    }

    handleStartGame(){
        this.props.onStart(true);
        this.props.onPopulate(2);
    }

    handleResetGame(){
        this.props.onStart(false);
    }
    render(){
        return (
            <div className = 'main-menu'>
                <div className = 'menu-text'>
                    <p> Enter No. of horses </p>
                    <input 
                        type='text' 
                        maxLength="10"
                        onChange = {this.handleText}
                        placeholder = "2=< horses =<9" required
                    />
                    <img className = 'StartButton'
                        src = {start_icon}
                        alt = 'Start icon'
                        onClick = {this.handleStartGame}
                    />
                    <img className = 'ResetButton'
                        src = {reset_icon}
                        alt = 'Reset Button'
                        onClick = {this.handleResetGame}
                    />
                </div> 
            </div>   
        );
    }
}