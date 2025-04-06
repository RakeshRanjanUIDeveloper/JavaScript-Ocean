/* let multiply=function(x,y){
console.log(x*y);
} */
/* let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);
let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5); */

let multiply=function(x){
    return function(y){
    console.log(x*y);
    }
    }
    let multiplyByTwo=multiply(2);
    multiplyByTwo(3);
    let multiplyByThree=multiply(3);
    multiplyByThree(3);

//print 1 to 5 after 1 sec of delay
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  } 