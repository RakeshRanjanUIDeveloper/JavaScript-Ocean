const obj = { fname: 'Jaya', lname: 'Shukla' };
const obj2 = { ...obj, age: 26 };

console.log(obj2);
console.log(obj);

const obj1 = { a: 1, b: 2 };
const obj22 = { b: 3, c: 4 };

const mergedObj = Object.assign({}, obj1, obj22);
console.log(mergedObj); // { a: 1, b: 3, c: 4 }