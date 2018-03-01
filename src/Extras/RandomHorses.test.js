import { RandomHorses } from './RandomHorses';

describe('It tests Random Horses', () => {
    it('it tests horse are returned', () => {
        const horsesArray = RandomHorses(4).length;
        expect(horsesArray).toBe(4);
    });

    it('it checks if there are no duplicates', () => {
        const horsesArray = RandomHorses(9);

        for(let i=0; i<horsesArray.length; i++){
            let horse = horsesArray[i];
            let arrayRemainder = horsesArray.slice(i+1, horsesArray.length);
            
            expect(arrayRemainder).not.toContain(horse);
        };
    });
});