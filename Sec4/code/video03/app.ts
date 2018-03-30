abstract class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }

  abstract greet(): void;
}

class SuperHero extends Person {
  constructor(name: string) {
    super(name);
  }
  greet(): void {
    console.log(`Hello, I am ${this.name}.`);
  }
}

let thor = new SuperHero('Thor');
thor.greet();