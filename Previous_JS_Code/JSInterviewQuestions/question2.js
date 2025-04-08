// find the maximum number in an array

const num1 = [2, 100, 3, 4, 5, 6, 7]

// using Max function
let result = num1.sort().reverse()
console.log(result[result.length - 1]);


//using for loop
let maxval = 0;
function max1(num1) {
    for (var i = 0; i < num1.length; i++) {
        if (maxval < num1[i]) {
            maxval = num1[i];
        }
    }
    return maxval;
}
// console.log(max1(num1));

// using map function
let maxval1 = 0;
function max(num1) {
    num1.map((items) => {
        if (maxval1 < items) {
            maxval1 = items
        }
    })
    // console.log(maxval1)
}
max(num1)
