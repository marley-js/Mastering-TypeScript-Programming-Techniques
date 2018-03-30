const fs = require('fs');
const path = require('path');
fs.readdir('/tmp', (error, files) => {
  if (error) {
    console.error(`Error reading folder ${error}`);
  } else {
    files.forEach(filename => {
      if (path.extname(filename) === '.tmp') {
        fs.unlink(filename, (error) => {
          if (error) {
            console.error(`Error deleting file ${error}`);
          } else {
            console.info(`Successfully deleted ${filename}`);
          }
        });
      } else {
        console.info(`"${filename}" not a .tmp file`);
      }
    });
  }
});