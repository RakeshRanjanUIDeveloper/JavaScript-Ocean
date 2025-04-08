const arr1=[{name:'jaya', age:26, city:'Lucknow'}, {name:'jaya2', age:27, city:'Kanpur'},{name:'jaya3', age:28, city:'Lucknow'}];
const output=arr1.map((val, index, arr)=> 
val.city === 'Lucknow' ? [...arr, val.address='abc'] : [...arr, val.address='xyz']  

);
console.log(output);
// const arr1=[{name:'jaya', age:26, city:'Lucknow'}, {name:'jaya2', age:27, city:'Kanpur'},{name:'jaya3', age:28, city:'Lucknow'}];
// const output=arr1.map((val,index,arr)=>{ 
// val.city === 'Lucknow' ? val.address='abc': val.address='xyz';
// return arr;
// });
// console.log(output);
// output======>>>>
// [[{
//     address: "abc",
//     age: 26,
//     city: "Lucknow",
//     name: "jaya"
//   }, {
//     address: "xyz",
//     age: 27,
//     city: "Kanpur",
//     name: "jaya2"
//   }, {
//     address: "abc",
//     age: 28,
//     city: "Lucknow",
//     name: "jaya3"
//   }], [circular object Array], [circular object Array]]