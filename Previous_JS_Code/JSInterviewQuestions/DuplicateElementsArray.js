const arr=[2,5,1,5,8,4,1];
const outputArray=arr.filter((val,index,array)=>{
    return array.indexOf(val) !== index ;
})
console.log(outputArray);