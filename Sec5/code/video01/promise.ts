function test(value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
}

test(1).then(res => {
  let number = Number(res);
  return test(number + 1);
}).then(res => console.log(res));