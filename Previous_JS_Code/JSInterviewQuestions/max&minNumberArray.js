const num=[20,21,455,45,3456,1];
const MaxNum=num.reduce((prev,curr)=>{
    return prev<curr?curr:prev;
});
console.log(`Max number is : ${MaxNum}`);

const MinNum=num.reduce((prev,curr)=>{
    return prev>curr?curr:prev;
});
console.log(`Min number is : ${MinNum}`);

//through loop Max number
const arr = [1, 3, 7, 2, 5, 10, 6];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max); // 10


//Second Largest Value
const MaxVal=Math.max(...num);
console.log(MaxVal);
const valIndex=num.indexOf(MaxVal);
const newVal=num.splice(valIndex,1);
const newMaxVal=Math.max(...num);
console.log(newMaxVal);

//Difference in find& filter
const emp=[
    {name:'Jaya', age:26},
    {name:'Rachit', age:27},
    {name:'chun', age:10},
    {name:'Khushi', age:60},
    {name:'Jazz', age:40}
]
const outputArr=emp.filter(ele=>ele.age>30);
console.log(outputArr);
const outputArrFind=emp.find(ele=>ele.age>30);
console.log(outputArrFind);

//Find missing numbers in an array
arrVal=[6,2,1,4,5,7,10,9];
const missingArray=[];
const minVal=Math.min(...arrVal);
const maxVal=Math.max(...arrVal);
for(let i=minVal; i<maxVal; i++){
    if(arrVal.indexOf(i)<0){
        missingArray.push(i);
    }   
}
console.log(missingArray);