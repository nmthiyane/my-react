import React from 'react';
import './RaceCourse.css';

export class RaceCourse extends React.Component{
    render(){
        return (
            <div>
                <img
                    src = {this.props.racingUsers[0].avatarUrl}
                />
            </div>
        )
    }
}