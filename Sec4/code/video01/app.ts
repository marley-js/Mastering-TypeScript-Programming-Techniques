interface IPerson {
  name: string;
  age: number;
  hobby?: string[];
  [prop: string]: any;
};

let myPerson: IPerson = {
  name: 'John',
  age: 22,
  // hobby: ['reading', 'cooking']
}

// interface myFn {
//   (n: number, m: number): number
// }

// let myCalculator: myFn;
// myCalculator = function(number1, number2) {
//   return number1 + number2;
// }


// interface IPerson {
//   name: string;
// }

// interface IStudent extends IPerson {
//   class: string;
// }

// let user = <IStudent>{};
// user.name = 'john';
// user.class = 'maths';
// user.age = 22;