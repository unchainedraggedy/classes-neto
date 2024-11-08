import Bowman from '../bowman';

test('создание лучника', () => {
  const newBowman = new Bowman('Alex');
  const correctBowman = {
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(newBowman).toEqual(correctBowman);
});
