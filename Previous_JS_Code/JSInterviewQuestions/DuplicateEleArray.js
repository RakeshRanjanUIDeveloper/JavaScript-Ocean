/* const mySet = new Set([1,1,1, 2, 3, 3, 4]); */
/* console.log(Array.from(mySet)); */
/* console.log([...mySet]); */
const arr=[2,6,4,9,3,2,7,3,6];
const newArray=arr.filter((num,index,array1)=>{
	return index === array1.indexOf(num);
})
console.log(newArray);
//[2, 6, 4, 9, 3, 7]