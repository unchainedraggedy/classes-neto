import Undead from '../undead';

test('бессмертный без имени', () => {
    expect(() => new Undead(1)).toThrow('некорректный ввод');
  });
  
  test('бессмертный c атакой 30', () => {
    const undead = new Undead('Undead');
    undead.attack = 30;
    const correctUndead = {
        name: 'Undead',
        type: 'Undead',
        level: 1,
        health: 100,
        attack: 30,
        defence: 25
    }
    expect(undead).toEqual(correctUndead);
  });