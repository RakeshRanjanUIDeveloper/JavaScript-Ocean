// Shallow copying creates a new object with references to the same memory locations as 
// the original object, while deep copying creates a new object with new memory locations 
// for all of its properties and nested objects or arrays


// object - copying by reference
let obj =
{
    name: "initial"
}

let user = obj
// user copied the memory location of obj
user.name = "final"
// console.log(obj); // final


// variable - copying by value

let x = 100;
let y = x;
y = 200;
// console.log(x);



// shallow copy - 2 ways

let obj2 =
{
    name: "Rahul"
}
// by object assign - copying actual value
let obj3 = Object.assign({}, obj2);
obj3.name = "Ankit";
// console.log("obj2", obj2);
// console.log("obj3", obj3);

// by destructuring
let obj4 = { ...obj2 };
obj4.name = "Peter";
// console.log("obj2", obj2);
// console.log("obj4", obj4);



// in shallow, by using destructure, copying happens till 1st level
// deep copy

let object1 =
{
    name: "Rahul",
    location:
    {
        city: "Jamshedpur",
        state: "Jharkhand",
    }
}
// JSON.stringify - converting object to string
// JSON.parsre - converting string to object


let object2 = { ...object1 };
object2.location.city = "Mumbai";
//console.log(object1);
//console.log(object2);


// Solution, only way
let object3 =
{
    name: "Rahul",
    location:
    {
        city: "Jamshedpur",
        state: "Jharkhand",
    }
}
// JSON.stringify - converting object to string
// JSON.parsre - converting string to object


let object4 = JSON.parse(JSON.stringify(object3));
object4.location.city = "Mumbai";
// console.log(object3);
// console.log(object4);

// limitation

let object5 =
{
    name: "Rahul",
    location:
    {
        city: "Jamshedpur",
        state: "Jharkhand",
    },
    getData: function () {
        return "all data is here"
    },
}
// during converion obect/string and viceversa, function/date is not copied
// solution is using lodash cdn
let object6 = _.cloneDeep(object5);
object6.location.city = "Mumbai";
console.log(object5);
console.log(object6);



