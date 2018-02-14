/**
 * Author:
 * Date: 
 * Description: This component is responsible for rendering a single horse
 */
import React from 'react';

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