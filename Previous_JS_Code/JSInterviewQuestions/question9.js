// function that returns the Fibonacci sequence up to a given number of terms


const num = 11;


function fiboSeries(num) {
    if (num <= 0) {
        console.log("Wrong Input !!")
    }
    else if (num == 1) {
        console.log("Fibonacci series is ", [0, 1])
    }
    else {
        let finalList = [0, 1];
        while (finalList.length < num) {
            let finalResult = finalList[finalList.length - 1] + finalList[finalList.length - 2];
            finalList.push(finalResult);
        }
        console.log(finalList)
    }
}


fiboSeries(num)




let first = 0;
let second = 1;
let output = 0;
let result = []


function fibonacciSeries(num) {
    for (let i = 0; i < num; i++) {
        output = first + second;
        first = second;
        second = output;
        result.push(output);
    }
    return result;
}

//console.log(fibonacciSeries(num));