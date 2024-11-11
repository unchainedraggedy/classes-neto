import Character from '../character';

test('создание несуществующего персонажа', () => {
  expect(() => new Character('Ivan', 'Baba Yaga')).toThrow('недопустимый тип персонажа');
});

test('test damage', () => {
  const newChar = new Character('Bonch', 'Bowman');
  newChar.health = 0;
  newChar.damage(2);
  expect(newChar.health).toBe(0);
});
