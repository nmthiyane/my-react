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
    
    populateHorses(){
        var racingHorses = [];
        //Itarate through the the json object and load the number of users that will be loading
        for(let i =0; i< this.props.noOfHorses; i++){
            racingHorses[i] = {
                name: allUsers[i]['login'],
                avatarUrl: allUsers[i]['avatar_url']
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