// Debouncing - it powerful technique used to optimize event handling by delaying the execution
//              of a function until after a specified period of time.
let counter = 0;
const getData = () => {
    console.log('Fetching data ..', counter++);
}

const debouncing = function (apicall, delay) {
    let timer;
    return function () {
        let obj = this;
        args = arguments;
        clearInterval(timer);
        timer = setTimeout(() => {
            apicall.apply(obj, args);
        }, delay);
    }
}

const fetchData = debouncing(getData, 300)


//  <input type="text" onkeyup="fetchData()"> 