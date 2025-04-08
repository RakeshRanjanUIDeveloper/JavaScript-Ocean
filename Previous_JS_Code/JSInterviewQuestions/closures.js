// Closures - a combinatin of functions that are bundled together with 
// reference to its lexical environment.

// Set TimeOut

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            //console.log(i);
        }, i * 1000)
    }

    // console.log("Namaste Javascript");
}

x();

// if cant use let then


function y() {
    for (var m = 1; m <= 5; m++) {
        function closures(param) {
            setTimeout(function () {
                console.log("value is ..", param)
            }, param * 1000);
        }
        closures(m)
    }
}

y();


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a)
//     }
//     a = 100;
//     return y
// }
// var z = x();
// console.log(z)
// z();


function outest() {
    var y = 20;
    function outer(param) {
        let x = 100;
        function inner() {
            console.log(x + ' , ' + param + ' , ' + y);
        }
        return inner;
    }
    return outer
}
let x = 200;
var z = outest()("Hello World");
z();