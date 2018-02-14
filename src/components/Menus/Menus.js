import React from 'react';
import './Menus.css';

import start_icon from '../../images/start_icon.png';
import reset_icon from '../../images/reset_icon.png';


export class Menus extends React.Component{
    
    handleText(){
        console.log('change');
    }

    handleStartGame(){
        alert('hand');
    }

    handleResetGame(){
        alert('reset');
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
                    <h2> Time:  </h2>
                    <label className = 'TimeLabele' >
                    00:00:00
                    </label>
                </div>
            </div>   
        );
    }
}