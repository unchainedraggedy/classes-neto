import Character from '../character';

test('создание несуществующего персонажа', () => {
  expect(() => new Character('Ivan', 'Baba Yaga')).toThrow('недопустимый тип персонажа');
});
