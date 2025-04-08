// function to check if a given number is prime

const num = 1;
let isPrime = true;

function checkPrime(num) {
    if (num < 1) {
        console.log('Prime number does not exists for : ' + num);
    }
    else if (num == 1) {
        console.log('1 is not a prime number!!');
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
            }

        }
        if (isPrime == false) {
            console.log(num + " is not a prime number..");
        }
        else {
            console.log(num + " is a prime number..");
        }
    }

}


checkPrime(num);