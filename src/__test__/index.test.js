import Character, {Bowman, Swordsman, Magician, Undead, Zombie, Daemon} from "../index"

test('создание несуществующего персонажа', () => {
    expect(() => new Character('Ivan', 'Baba Yaga')).toThrow('недопустимый тип персонажа');
})

test('создание лучника', () => {
   const newBowman = new Bowman('Alex')
   expect(newBowman.type).toBe('Bowman')
})

test('создание мечника', () => {
    const newSwordsman = new Swordsman('Swordie')
    expect(newSwordsman.attack).toBe(40)
 })

 test ('мёртвый волшебник', () => {
    const newMagician = new Magician('Birkin');
    newMagician.health = 0;
    expect(newMagician.health).toBe(0);
 })

 test('бессмертный без имени', () => {
       expect(() => new Undead(1)).toThrow('некорректный ввод');
 })

 test('бессмертный c атакой 30', () => {
    const undead = new Undead('Undead');
    undead.attack = 30;
    expect(undead.attack).toBe(30)
})

test('нездоровый зомби', () => {
    const zombak = new Zombie('Zombak');
    zombak.health = 0;
    expect(zombak.health).toBe(0);
})

test('тест на дэймона', () =>
    {
        const daemon = new Daemon('daemon');
    expect(daemon.level).toBe(1);
    })