// function propertyDecorator(target: Object, key: string) {
//   let value = target[key];

//   function getter() {
//     // return `${value}. But that's not my real name`;
//     return value;
//   }
//   function setter(newValue) {
//     value = newValue;
//   }
//   Object.defineProperty(target, key, {
//     get: getter,
//     set: setter
//   });
// }

// class Hero {
//   // @propertyDecorator
//   public name: string;
//   constructor() { }
//   greet(): string {
//     return `Hi, I am ${this.name}.`;
//   }
// }

// const myHero = new Hero();
// myHero.name = 'Batman';
// delete myHero.name;
// console.log(myHero.greet());