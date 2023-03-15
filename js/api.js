const user = {
    id: 542,
    name: 'ali shorif',
    address: 'rajshashi',
    login: true,
    age: 25
}

// console.log(user);

const stringifyFormate = JSON.stringify(user);
// console.log(stringifyFormate);

const objectConvert = JSON.parse(stringifyFormate);
console.log(objectConvert);