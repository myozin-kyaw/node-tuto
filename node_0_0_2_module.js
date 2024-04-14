// modules
// Common JS, every file is module ( by default )
// Modules - Encapsulated code ( only share minimun )

const jhon = 'jhon';
const peter = 'peter';

const sayHi = (name) => {
    console.log(`Hello there, ${name}`);
}

sayHi('susan');
sayHi(jhon);
sayHi(peter);

