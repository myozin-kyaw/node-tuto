const _ = require('lodash');

const myarray = [1, 2, [3, 4], [5, [6, 7, [8, 9]]]];

console.log(_.flattenDeep(myarray))