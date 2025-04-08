// Hoisting - Hoisting is a process that access variables and functions before 
// you have initialized or declared.

// Calling before initilizing
console.log(x);
xCheck();

var x = 7;

function xCheck() {
    console.log("Namaste Javascript !!!");
}


