let horseGenerator = require('./RandomHorses');

test('it tests horse are returned', ()=> {
    const horsesArray = horseGenerator(4).length;
    expect(horsesArray).toBe(4);
})