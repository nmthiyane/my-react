import React from 'react';
import './Menus.css';
import start_icon from '../../images/start_icon.png';
import reset_icon from '../../images/reset_icon.png';


export class Menus extends React.Component{
    
    handleText(event){
        //Pass noOfHorses to parent
        if(event.target.value === ""){
            //Reset to default
            this.props.onPopulate(2);
        }
        else if(event.target.value > 9 || event.target.value < 2 ) {     
            alert('Number of horses must from 2 - 9');
        }
        else {
            this.props.onPopulate(event.target.value);
        }

    
    }

    handleStartGame(){
        console.log('hand');
    }

    handleResetGame(){
        console.log('reset');
    }
    render(){
        return (
            <div className = 'main-menu'>
                <div className = 'menu-text'>
                    <p> Enter No. of horses </p>
                    <input 
                        type='text' 
                        maxLength="10"
                        onChange = {this.handleText.bind(this)}
                        placeholder = "2=< horses =<9" required
                    />
                    <img className = 'StartButton'
                        src = {start_icon}
                        alt = 'Start icon'
                        onClick = {this.handleStartGame.bind(this)}
                    />
                    <img className = 'ResetButton'
                        src = {reset_icon}
                        alt = 'Reset Button'
                        onClick = {this.handleResetGame.bind(this)}
                    />
                </div> 
                <div className = 'TimerDiv'>
                    <label>
                       Time:
                    </label>
                    <label className = 'TimeLabele' >
                    00:00:00
                    </label>
                </div>
            </div>   
        );
    }
}