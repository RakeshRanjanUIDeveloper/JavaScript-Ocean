const num=[2,4,3,1,8,7];
const evenNum=num.filter(num=>num%2===0);
console.log(evenNum);
const oddNum=num.filter(num=>num%2!==0);
console.log(oddNum);

//Sum of numbers
const sumOutput=num.reduce((prevVal,currVal)=>prevVal+currVal);
console.log(sumOutput);

//Factorial of a number

const number=prompt('Enter your number');
let fact=1;
for(let i=1; i<=number;i++){
    fact=fact*i;
}
console.log(fact);

//prime number
const primeNumber=prompt('Enter your number');
for (let i=2;i<primeNumber;i++){
    if(primeNumber%i === 0){
        console.log('Not a prime number');
    }
    else{
        console.log('prime number')
    }
}
