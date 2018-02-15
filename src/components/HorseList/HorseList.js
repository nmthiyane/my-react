/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for rendering a single horse
 */
import React from 'react';
import './HorseList.css';


export class Horse extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            progress: 10
        }
    }
    
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
                    <progress value={this.state.progress} max="100"></progress> 
            </div>
        );
    }
}

export class HorseList extends React.Component{
    render() {
        return (
            //Calling the hourse object
             <div>
                {this.props.allHorses.map( (horse, i) => 
                    <Horse 
                        avatarUrl = {horse['avatarUrl']}
                        username = {horse['name']}
                    />
                )}
            </div>
        );
    }
}