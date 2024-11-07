export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('некорректный ввод');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    if (!types.includes(type)) {
      throw new Error('недопустимый тип персонажа');
    }
  }
}
