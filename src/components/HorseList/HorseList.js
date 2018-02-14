/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for rendering a single horse
 */

import React from 'react';
import './HorseList.css';
import allUsers from './team.json';


export class Horse extends React.Component{
    render(){
        return (
            <div className = 'HorseDiv'>
                    <h4 className = 'Horse Name'>
                        {this.props.username}
                    </h4>
                    <img 
                        src = {this.props.avatarUrl}
                        alt = 'Horse avatar'
                    />
            </div>
        );
    }
}

export class HorseList extends React.Component{
    
    populateHorses(){
        //Generate random numbers to make users random
        let randomHorses = [];
        while(randomHorses.length < this.props.noOfHorses){
            const random = Math.floor(Math.random()*29) + 1;
            //If number is unique, add to array
            if(randomHorses.indexOf(random) === -1){
                randomHorses.push(random);
            }
        }
        //Create objects of users in json file
        let racingHorses = [];
        for(let i =0; i< this.props.noOfHorses; i++){
            let position = randomHorses[i];
            racingHorses[i] = {
                name: allUsers[position]['login'],
                avatarUrl: allUsers[position]['avatar_url']
            };
        }
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