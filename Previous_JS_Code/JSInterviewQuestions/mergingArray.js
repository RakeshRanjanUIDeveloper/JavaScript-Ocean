//swapping of 2 variables
let a=4, b=6;
[a,b]=[b,a];
console.log(a,b);

//Merging of an array
const arr=[2,5,63,8,12,54], arr2=[4,7,66,4,32,46];
const output=[...arr, ...arr2];
const sorted1=output.sort((a,b)=>a-b);
console.log(sorted1);
const resultant=arr.concat(arr2,99);
const sorted2=resultant.sort((a,b)=>a-b);
console.log(sorted2);

//Comparing two arrays
const arr1 = [2, 5, 3, 21];
const array2 = [5, 3, 21, 2];
const outputArray= arr1.length === array2.length && arr1.every(item=>array2.includes(item));
console.log(outputArray);
// output:true

//intersection of two arrays
const arr11=[2,5,3,21,4,3,21,45,45,45], array21=[5,3,21,2];
const resultVal=arr11.filter(item=>array21.includes(item));
console.log([...new Set(resultVal)]);
// const output=arr11.filter((ele,index,arr)=>array21.includes(ele) && index === arr.indexOf(ele) );

//Capitiatization
const input=prompt("Enter your string");
const val=input.split(" ");
const outputStr=val.map(ele=>ele.charAt(0).toUpperCase()+ ele.slice(1));
console.log(outputStr.join(" "));
