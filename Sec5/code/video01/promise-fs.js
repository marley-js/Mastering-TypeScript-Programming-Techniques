const fs = require('fs');
function readDir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
}
readDir('/tmp').then(files => console.log(files));
