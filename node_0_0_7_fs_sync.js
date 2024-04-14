const { readFileSync, writeFileSync } = require('fs');

const readFileValue = readFileSync('./content/subfolder/file.txt', 'utf-8');

console.log(readFileValue);

writeFileSync('./content/subfolder/write.txt', `This file is created using writeFileSync: ${readFileValue}`, { flag: 'a' });