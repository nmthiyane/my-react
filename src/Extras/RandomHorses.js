/**
 * Author: Ntuthuko Mthiyane
 * Date: 15/02/2018
 * Description: This function is responsible for generating random users ojects read from the json object
 */
import allUsers from './team.json';

export function RandomHorses(noOfHorses){
    //Generate random numbers to make users random
    let randomHorses = [];
    while(randomHorses.length < noOfHorses){
        const random = Math.floor(Math.random()*29) + 1;
        //If number is unique, add to array
        if(randomHorses.indexOf(random) === -1){
            randomHorses.push(random);
        }
    }
    //Create objects of users in json file
    let racingHorses = [];
    for(let i =0; i< noOfHorses; i++){
        let position = randomHorses[i];
        racingHorses[i] = {
            name: allUsers[position]['login'],
            avatarUrl: allUsers[position]['avatar_url']
        };
    }
    return racingHorses;
}

//module.export = RandomHorses;