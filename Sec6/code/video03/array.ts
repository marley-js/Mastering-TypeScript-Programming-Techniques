import * as R from 'ramda';

const arr = [10, 20, 30];
// const replace = R.update(1, 15);
// const finalArray = replace(arr);
// const finalArray = R.adjust(R.multiply(10), 2, arr);
// const finalArray = R.join('|')(arr);
// const finalArray = R.reverse(arr);
const finalArray = R.product(arr);
console.log(finalArray);