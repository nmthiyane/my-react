/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for rendering a single horse
 */

import React from 'react';
import allUsers from './team.json';


export class Horse extends React.Component{
    render(){
        return (
            <div className = 'HorseDiv'>
                <div className = 'avatar'>
                    <img 
                        src = {this.props.avatarUrl}
                        alt = 'Horse avatar'
                    />
                </div>
                <div>
                    <h3 className = 'Horse Name'>
                        {this.props.username}
                    </h3>
                </div>
            </div>
        );
    }
}

export class HorseList extends React.Component{
    
    populateHorses() {
        //Create an array with unique random
        let randomValues = [];
        while(randomValues.length < this.props.noOfHorses){
            const randomValue = Math.floor(Math.random()*9) + 2;
            //Only add user if not already on the array
            if(randomValues.indexOf(randomValue) !==-1){
                randomValues.push(randomValue);
            }
        };

        //Itarate through the the json object and random unique users
        var racingHorses = [];
        for(let i =0; i< this.props.noOfHorses; i++){
            let position = randomValues[i];
            racingHorses[i] = {
                name: allUsers[position]['login'],
                avatarUrl: allUsers[position]['avatar_url']
            };
        }
       console.log(racingHorses[1]['avatarUrl']);
        return racingHorses;
    }
    
    render() {
        return (
            //Calling the hourse object
            <div>
                {this.populateHorses().map( horse=> 
                    <Horse 
                        avatarUrl = {horse['avatarUrl']}
                        username = {horse['name']}
                    />
                )
                }
            </div>
        );
    }
}