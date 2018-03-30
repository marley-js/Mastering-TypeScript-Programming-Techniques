import * as R from 'ramda';

const obj = {
  name: 'John',
  age: 22
};

const obj2 = {
  name: 'Steve',
  age: 22
};

// const newObj = R.clone(obj);
// console.log(newObj);
const updateToUpperCase = R.evolve({ name: R.toUpper});
console.log(
  // R.eqProps('name', obj, obj2)
  // R.has('name', obj)
  // R.mergeDeepRight(obj, obj2)
  updateToUpperCase(obj)
);