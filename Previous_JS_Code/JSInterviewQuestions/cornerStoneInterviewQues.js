//1 question
const labels = [];
labels[-1] = "abcd";
console.log(labels);
//output=[] --->In your code, labels[-1] = "abcd" adds a property -1 to the labels array
// object. This property is not considered an array element and does not affect the 
//array's length. The array remains empty in terms of elements, but it has a custom 
//property with the key -1.

//2nd question
let arrVal = [2, 6, 2, 1];
// Convert array to Set to remove duplicates, then convert Set back to array
let uniqueArr = [...new Set(arrVal)];
console.log(uniqueArr); // Output: [2, 6, 1]

//3rd Question
//IIFE benefits and drawbacks
//While IIFEs are a useful tool in certain scenarios, their drawbacks include potential 
//impacts on readability, maintainability, reusability, testability, and error handling. 
//With the advent of modern JavaScript 
//features like ES6 modules and block-scoped variables (let and const), many of the 
//use cases for IIFEs can be addressed more effectively using these newer constructs.

//tree-shaking
//Tree shaking is an essential optimization technique in modern JavaScript development,
// helping to reduce bundle sizes and improve application performance. By leveraging static 
//analysis and the ES6 module system, developers can ensure that only the necessary code
// is included in the final build, leading to more efficient and performant web applications.





