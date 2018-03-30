function getData() {
    const data = {
        address: {
            city: 'London',
            country: 'UK'
        }
    };
    return new Promise((resolve, reject) => {
        if (!data) {
            reject();
        }
        else {
            resolve(data);
        }
    });
}
getData().then((response) => {
    delete response.address;
    console.log(response.address.city);
})
    .catch(error => console.error(error));
