interface IPerson {
  name: string;
  age: number;
  hobby: string[];
}

const john: IPerson = {
  name: 'John',
  age: 22,
  hobby: ['baking', 'horse riding']
};

console.log(john);