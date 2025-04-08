// JavaScript program to calculate the factorial of a given number


const num = 6;
let output = 1;

function factorial(num) {
    let check = num;
    if (num < 0) {
        console.log('Error!!!, Factorial of negative number does not exists...')
    }
    else if (num == 1 || num == 0) {
        console.log('Factorial of ', check, " : 1");
    }
    else {
        while (num > 0) {
            output = output * num;
            num--;
        }
        console.log('Factorial of ', check, " : ", output);
    }
}


factorial(num);