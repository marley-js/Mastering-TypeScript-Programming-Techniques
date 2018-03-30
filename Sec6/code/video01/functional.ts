const data = {
  name: 'John',
  age: 22
};

// data.name = 'Steve';
// console.log(data);

const newData = Object.assign({}, data, { name: 'Steve' });
console.log(newData);