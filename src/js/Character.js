export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    const hero = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie'
    ];

    if (!hero.includes(type)) {
      throw new Error('Недопустимый тип персонажа');
    }
  }

  // Task № 2 (Methods)
  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }

    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) return;

    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
