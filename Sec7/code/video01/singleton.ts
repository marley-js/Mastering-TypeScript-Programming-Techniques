// class MySingleton {
//   private static instance: MySingleton;
//   private constructor() { }
//   static getInstance() {
//     if (!MySingleton.instance) {
//       MySingleton.instance = new MySingleton();
//     }
//     return MySingleton.instance;
//   }

//   greet(): string {
//     return 'Hello from Singleton!';
//   }
// }

// const singleton1 = MySingleton.getInstance();
// const singleton2 = MySingleton.getInstance();
// console.log(singleton1 === singleton2);

namespace MySingleton {
  export function greet(): string {
    return 'Hello from Singleton!';
  }
}

let singleton1 = MySingleton;
let singleton2 = MySingleton;
console.log(singleton1 === singleton2);