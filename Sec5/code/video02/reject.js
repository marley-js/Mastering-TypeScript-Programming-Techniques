const promise = new Promise((resolve, reject) => {
    reject('failed...');
});
promise.then(res => console.log(res)).catch(error => console.error(error));
