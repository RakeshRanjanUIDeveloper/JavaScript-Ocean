var y =1;
var x = function(){
  console.log(y);
  var y=3;
  console.log(y)
}
console.log(y)
x();

// 1
// undefined
// 3