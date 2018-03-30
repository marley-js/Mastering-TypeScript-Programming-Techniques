// function classDecorator<T extends {new(...args:any[]):{}}>(constructor: T) {
//   return class extends constructor {
//     name = 'Superman';
//   }
// }
// @classDecorator
// class Hero {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const myHero = new Hero('Batman');
// console.log(myHero.name);