Array.prototype.mymap = function (callback, thisArg) {
  var arr = this; // The array calling the map function
  var result = []; // Array to hold the results

  for (var i = 0; i < arr.length; i++) {
    result.push(callback.call(thisArg, arr[i], i, arr)); // Call the callback with thisArg and push the result
  }

  return result; // Return the resulting array
};

// Test the polyfill
const arrVal = [1, 2, 3, 4];
const output = arrVal.mymap((ele) => ele + 1);
console.log(output); // [2, 3, 4, 5]

//Question 2
var x;
console.log(x); //undefined
function sum() {
  console.log(x); // undefined
  var x = 10;
  console.log(x); //10
}
sum();
x = 30;
console.log(x); //30

//Question 3
for (var i = 0; i < 3; i++) {
    (function(i) { // Create a closure to capture the current value of i
      setTimeout(() => console.log(i), 1000);
    })(i); // Pass the current value of i to the immediately invoked function expression
  }
  
