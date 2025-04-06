

let name1 = {
    firstName: "John",
    lastName: "Wick",
}

let name2 = {
    firstName: "Nikhil",
    lastName: "Kumar",
}

let name3 = {
    firstName: "Abhishek",
    lastName: "Singh",
}

let name4 = {
    firstName: "Suraj",
    lastName: "Yadav",
}


let printName = function (country, state) {
    console.log(this.firstName, this.lastName, 'is from', country, state);
}

printName.call(name1, "US", "California");
printName.call(name2, "Jharkhand", "Jamshedpur");


printName.apply(name3, ["Odisha", "Bhubaneshwar"]);



let check1 = printName.bind(name4, "West Bengal", "Kolkata");
console.log(check1);

check1();



//name1.printName.call(name2);