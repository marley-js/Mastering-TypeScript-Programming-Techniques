class Person {
  public name: string;
  // private name: string;
  // protected name: string;
  // readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): void {
    console.log(`Hello ${this.name}`);
  }
}

class SuperHero extends Person {
  constructor(name: string) {
    super(name);
  }
  greet(): void {
    // this.name = 'Steve';
    console.log(`Hello superher: ${this.name}`);
  }
}

const person1 = new Person('Tony Stark');
// person1.name = 'Steve';
person1.greet();