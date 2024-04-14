// sync
const { readFileSync, writeFileSync } = require('fs');

console.log('start writing the file ...1 using synchronous');

const readFileValue1 = readFileSync('./content/subfolder/file.txt', 'utf-8');

writeFileSync('./content/subfolder/write.txt', `This file is created using writeFileSync: ${readFileValue1}`, { flag: 'a' });

console.log('done writing file ...1');
console.log('start writing the next file ...1');

// async
const { readFile, writeFile } = require('fs');

console.log('start writing the file ...2 using asynchronous');
readFile('./content/subfolder/file.txt', 'utf-8', (err, result) => {
    if (err) {
        console.error(err);

        return;
    } 

    const readFileValue2 = result;

    writeFile('./content/subfolder/file.txt', `Here is updated result: ${readFileValue2}`, (err, result) => {
        if (err) {
            console.error(err);

            return;
        }

        console.log('done writing file ...2');
    });
});
console.log('start writing the next file ...2');