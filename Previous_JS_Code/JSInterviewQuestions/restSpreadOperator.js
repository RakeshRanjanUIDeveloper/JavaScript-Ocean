// Spread Operator allows us to expand an array or object into its individual elements.
// Rest Operator allows us to condense multiple elements into a single array.

// Rest operator

function add(...restParam) {
    //console.log('rest operator', restParam);
}

add(1, 2, 3, 4);


// Spread operator

let value = [1, 2, 3];

// console.log(...value);

const data = {
    name: "Rajat",
    address: "Jamshedpur",
    age: 28,
}

const newData = { ...data, name: "Das" };
const { name, ...rest } = data;
console.log(name, rest)