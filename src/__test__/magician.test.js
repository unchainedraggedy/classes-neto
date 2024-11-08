import Magician from '../magician';

test('мёртвый волшебник', () => {
  const newMagician = new Magician('Birkin');
  newMagician.health = 0;

  const deadMagician = {
    name: 'Birkin',
    type: 'Magician',
    level: 1,
    health: 0,
    attack: 10,
    defence: 40,
  };
  expect(newMagician).toEqual(deadMagician);
});
