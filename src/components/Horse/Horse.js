/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for rendering a single horse
 */
import React from 'react';
import './Horse.css';


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
                    <progress value={this.props.progress} max="100"></progress> 
            </div>
        );
    }
}