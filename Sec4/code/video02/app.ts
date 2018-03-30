class Person {
  greet(name: string): void {
    console.log(`Hello ${name}!`);
  }
}

class SuperHero extends Person {
  hasCape(flag: boolean): void {
    if (flag) {
      console.log('I have a cape!');
    } else {
      console.log('No capes for me...');
    }
  }
}

const spiderman = new SuperHero();
spiderman.greet('Peter Parker');
spiderman.hasCape(false);

// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greet(): void {
//     console.log(`${this.name} is a regular guy.`);
//   }

// }

// class SuperHero extends Person {
//   constructor(name: string) {
//     super(name)
//   }
//   greet(): void {
//     console.log(`${this.name} is a super hero!`);
//   }
// }
// let john = new Person('John');
// let bruce = new SuperHero('Bruce Wayne');

// john.greet();
// bruce.greet();