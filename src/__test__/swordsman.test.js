import Swordsman from '../swordsman';

test('создание мечника', () => {
    const newSwordsman = new Swordsman('Swordie');
    const correctSwordsma = {
        name: 'Swordie',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10

    }
    expect(newSwordsman).toEqual(correctSwordsma);
  });

  test('тест на level up мёртвого персонажа', () => {
    const sword = new Swordsman('Chooi');
    sword.health = 0;
    expect(() => sword.levelUp()).toThrow('персонаж мёртв');
  });
  