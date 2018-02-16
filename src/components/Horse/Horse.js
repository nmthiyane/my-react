/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for rendering a single horse
 */
import React from 'react';
import './Horse.css';

export class Horse extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            interval: 2,
            progress: 0
        }
        this.randomIncrement = this.generateRandom.bind(this);
    }

    // ComponentDidMount(){
    //     setInterval(this.randomIncrement, 100000);
    //     console.log('dsfdffwe');
    // }

    // ComponentDidUpdate(){
    //     setInterval(this.randomIncrement, 100000);
    //     console.log('dsfdffwe');
    // }

    incrementInterval(){
        this.setState({progress: this.state.progress + (Math.floor(Math.random()* 10) + 1)})
    }
    //This function will generate a random increment to each horse progress
    generateRandom(){
        console.log('dsfdffwe');
        setInterval(this.incrementInterval.bind(this), 1000);
        return (Math.floor(Math.random()* 10) + 1);
    }

    render(){
        //Checks if the game has started
        if(this.props.startGame && this.state.progress < 100){
            this.randomIncrement();
        }
        else if(!this.props.startGame && this.state.progress >= 100){
            this.setState({progress: 0});
            console.log('here');
        }
        console.log(this.state.progress);

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