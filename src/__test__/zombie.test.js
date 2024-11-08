import Zombie from '../zombie';

test('нездоровый зомби', () => {
  const zombak = new Zombie('Zombak');
  zombak.health = 0;
  const correctZombak = {
    name: 'Zombak',
    type: 'Zombie',
    level: 1,
    health: 0,
    attack: 40,
    defence: 10,
  };
  expect(zombak).toEqual(correctZombak);
});

test('тест на урон', () => {
  const zomb = new Zombie('Zomb');
  zomb.damage(2);
  expect(zomb.health).toBe(98.2);
});
