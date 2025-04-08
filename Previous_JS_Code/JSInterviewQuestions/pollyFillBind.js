// Polyfill for Bind //


let name =
{
    firstName: "Rajat",
    lastName: "Das",
}

let printName = function (area, location, country) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + area + ' , ' + location + ' , ' + country)
}

let myName = printName.bind(name, "Jamshedpur");
myName("Jharkhand", "India");

// custom Bind Method

Function.prototype.mybind = function (...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let myName2 = printName.mybind(name, "Baridih");
myName2("Jharkhand", "India");