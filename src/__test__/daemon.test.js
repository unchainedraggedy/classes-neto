import Daemon from '../daemon';

test('тест на дэймона', () => {
    const daemon = new Daemon('daemon');
    const correctDaemon = {
        name: 'daemon',
        type: 'Daemon',
        level: 1,
        health: 100,
        attack: 10,
        defence: 40
    }
    expect(daemon).toEqual(correctDaemon);
  });
  
  test('тест на levelup', () => {
    const levelUpDaemon = new Daemon('BestDaemon');
    levelUpDaemon.levelUp();
    expect(levelUpDaemon.defence).toBe(48);
  });