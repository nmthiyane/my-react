import { RandomHorses } from './RandomHorses';

describe('It tests Random Horses', () => {
    it('it tests horse are returned', () => {
        const horsesArray = RandomHorses(4);
        expect(horsesArray).toHaveLength(4);
        expect(horsesArray).no.toContain(null);
    });

    it('it checks if there are no duplicates', () => {
        const horsesArray = RandomHorses(9);
        
        for(let j=0; j<100; j++) {
            for(let i=0; i<horsesArray.length; i++){
                let horse = horsesArray[i];
                let arrayRemainder = horsesArray.slice(i+1, horsesArray.length);
                
                expect(arrayRemainder).not.toContain(horse);
            };
        }
    });
});