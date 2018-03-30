// function methodDecorator(target: Object, key: string, descriptor: PropertyDescriptor) {
//   let oldValue = descriptor.value;
//   descriptor.value = function() {
//     let value = oldValue.apply(null, [arguments[0].toUpperCase()]);
//     return value;
//   };
//   return descriptor;
// }

// class Hero {
//   public name: string;
//   constructor() { }
//   @methodDecorator
//   greet(name: string): string {
//     return `Hi, I am ${name}.`;
//   }
// }

// const myHero = new Hero();
// console.log(myHero.greet('Batman'));