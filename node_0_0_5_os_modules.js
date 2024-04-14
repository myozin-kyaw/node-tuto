const os = require('os');

const userInformation = os.userInfo();

// console.log(userInformation);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);