// A function that passes another function as a argument or returns a function from it 

const radius = [3, 1, 2, 4];

const area = function (radius) {
    return (Math.PI * radius * radius);
}

const daimeter = function (radius) {
    return (2 * radius);
}


const operation = function (operator, arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(operator(arr[i]));
    }
    return output;
}

console.log(operation(area, radius));
console.log(operation(daimeter, radius));

