//shadowing
let a = 10;
function x() {
    var a = 100;
    console.log(a);
}
x();

console.log(a);