const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/file.txt', 'utf-8', (err, result) => {
    if (err) {
        console.error(err);

        return;
    } 

    const readFileValue = result;

    writeFile('./content/subfolder/file.txt', `Here is updated result: ${readFileValue}`, (err, result) => {
        if (err) {
            console.error(err);

            return;
        }

        console.log(result);
    });
});