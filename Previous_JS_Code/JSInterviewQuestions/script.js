// third largest
const arr = [10, 1, 5, 56, 100, -100, 7, 65];
const arr1 = [10, 1, 5, 56, 100, -100, 7, 65];

//const arr 1 = [-100, 1, 5, 7, 10, 56, 65, 100];


const result = arr.sort()
console.log(result[result.length - 3]);





// const array = [10, 4, 9, 2, 11, 20, 30, 40];

// console.log(Math.min(...array))
// console.log(Math.max(...array))

// console.log('a' + 'b' - '2');

// console.log('a' + 1 - '2');

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// 47-   0,
// 88-   1,
// 546-  2,
// 8887- 3,
// 12-   4,
// 9886- 5,
// 65 -  6,
// 765-  7,
// 67-   8
// [0,8]
// target=114


// let nums = [2, 7, 11, 15];
// let target = 9;

// let nums = [47, 88, 546, 8887, 12, 9886, 65, 765, 67];
// let target = 114;
// let first, second, output = 0;
// let result = [];


// function finalResult(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             first = nums[i];
//             second = nums[j];
//             output = first + second;
//             if (output == target) {
//                 result.push(j)
//             }
//             else {
//                 output = 0;
//             }
//         }
//     }
//     console.log(result)
// }

// finalResult(nums, target)


// function check(nums, target) {
//     nums.map((items, index) => {
//         if (items < target) {
//             output = output + items;
//             if (output > target) {
//                 output = output - items
//             }
//             console.log(output)
//             result.push(index);
//         }
//     })
//     console.log(result);
// }

// check(nums, target)


// 5431 => 5 + 4 + 3 + 1 => 13 > 1 + 3 = 4


// const array = 4987;

// function check(val) {
//     let numToArray = String(val).split('').map((item) => {
//         return parseInt(item)
//     });
//     console.log(numToArray)

//     let finalOutput = numToArray.reduce((a, b) => a + b)
//     if (finalOutput > 9) {
//         check(finalOutput)
//     }
//     else {
//         console.log(finalOutput);
//     }
// }
// check(array);

// function abc(a) {
//     return function (b) {
//         if (b) return abc(a + b)
//         return a;
//     }
// }
// console.log(abc(5431));



// let str = "Hello, How are you";
// let str2 = "   Hello   ";

// console.log([str]);
// console.log(str.split());
// console.log(str.split(''));
// console.log(str.split(' '));
// console.log([...str]);
// console.log(str.split('a'));

// console.log(str.replace(/H/g, "_"));

// console.log(str.substring(2, 4));
// console.log(str.substring(2, str.length));
// console.log(str.substring(0, str.length - 1));

// console.log(str.split('').reverse().join(""));
// console.log(str2.trim());








// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [11, 12, 13]

// function findNum(num) {
//     return num > 7
// }
// console.log(arr.find(findNum));
// console.log({ ...arr2, ...arr })










// const arr = [10, 12, 14, 16, 18, 20];


// const rest = (res) => {
//     return res * 2;
// }

// const result = arr.map(rest);

// Array.prototype.myMap = function dummyMap(operation) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(operation(this[i]), i, this);
//     }
//     return output;
// }
// console.log(arr.myMap(rest));


// const abc = []
// const filter1 = arr.filter((res) => {
//     return res > 4;
// })
// //console.log(filter1);


// const test = (res) => {
//     return res > 14;
// }
// Array.prototype.myfilter = function dummyFilter(operation) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         //console.log(operation(this[i]));
//         operation(this[i], i, this) && output.push((this[i]));
//         // output.push(operation(this[i]));
//     }
//     return output;
// }

// console.log(arr.myfilter(test));




