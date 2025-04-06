// function that takes an array of numbers and returns a new array with only the even numbers


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = [];
const output1 = [];

function getEven(arr) {
    arr.filter((items) => {
        if (items % 2 == 0) {
            output.push(items);
        }
    })
    return output
}

// console.log(getEven(arr));


function checkEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            output1.push(arr[i]);
        }
    }
    return output1;
}

console.log(checkEven(arr));

