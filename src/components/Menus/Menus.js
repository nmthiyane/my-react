import React from 'react';
import './Menus.css';
import start_icon from '../../images/start_icon.png';
import reset_icon from '../../images/reset_icon.png';
import allUsers from './team.json'



export class Menus extends React.Component{
    
    handleText(event){
        let racingUsers = [];
        //Itarate through the the json object and load the number of users that will be loading
        for(let i =0; i<event.target.value; i++){
            racingUsers[i] = {
                name: allUsers[i]['login'],
                avaterUrl: allUsers[i]['avatar_url']
            };
        }

       // console.log(racingUsers);
        //Pass users to the parent component
        this.props.onPopulate(racingUsers);

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
                    <h2> Time:  </h2>
                    <label className = 'TimeLabele' >
                    00:00:00
                    </label>
                </div>
            </div>   
        );
    }
}