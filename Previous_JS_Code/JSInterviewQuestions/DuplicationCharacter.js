const str='accessibility';
const objectVal={};
for(let i=0; i<str.length;i++ ){
    let char= str[i];
    if(objectVal[char]){
objectVal[char]=objectVal[char]+1;
    }else{
        objectVal[char]=1;
    }
}
console.log(objectVal);
// output:{
//     a: 1,
//     b: 1,
//     c: 2,
//     e: 1,
//     i: 3,
//     l: 1,
//     s: 2,
//     t: 1,
//     y: 1
//   }
// const str = "mobility";
// const charCount = {};

// // Iterate through each character in the string
// for (let i = 0; i < str.length; i++) {
//     const char = str[i];
    
//     // If the character already exists in the charCount object, increment its count
//     // Otherwise, initialize its count to 1
//     if (charCount[char]) {
//         charCount[char]++;
//     } else {
//         charCount[char] = 1;
//     }
// }

// console.log(charCount); output:{
//   'm': 1,
//   'o': 1,
//   'b': 1,
//   'i': 1,
//   'l': 1,
//   't': 1,
//   'y': 1
// }
