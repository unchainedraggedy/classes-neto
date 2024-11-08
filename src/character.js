export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('некорректный ввод');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    if (!types.includes(type)) {
      throw new Error('недопустимый тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.defence = null;
    this.attack = null;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('персонаж мёртв');
    } else {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
