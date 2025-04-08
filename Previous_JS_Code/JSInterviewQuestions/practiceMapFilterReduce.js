

const arr = [1, 3, 5, 6, 7, 2];

// Map Function
function forMultiplyBy2(arr) {
    let emptyarr = [];
    for (let i = 0; i < arr.length; i++) {
        emptyarr.push(arr[i] * 2);
    }
    return emptyarr;
}

//Polyfill Map

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i]));
    }
    return temp;
}

//console.log(forMultiplyBy2(arr));

const mapMultiplyBy2 = arr.myMap((i) => { return i * 2 })
//console.log(mapMultiplyBy2)



//Filter Function

function forFilterGreater4(arr) {
    const emptyarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 4) {
            emptyarr.push(arr[i]);
        }
    }
    return emptyarr
}

// console.log(forFilterGreater4(arr));


Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            temp.push(this[i]);
        }
    }
    return temp;
}


const FilterGreater4 = arr.myFilter((x) => {
    if (x > 4) {
        return x;
    }
})

// console.log(FilterGreater4)


//Reduce Function


function forReduceFunction(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}

//console.log(forReduceFunction(arr));

Array.prototype.myReduce = function (cb, initial) {
    let acc = initial;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i]) : this[i];
    }
    return acc;
}

const ReduceFunction = arr.myReduce((x, y) => {
    return x + y;
}, 0)

// console.log(ReduceFunction);

let students = [
    { name: 'piyush', rollno: 31, marks: 80 },
    { name: 'jenny', rollno: 15, marks: 69 },
    { name: 'kaushal', rollno: 16, marks: 35 },
    { name: 'dilpreet', rollno: 7, marks: 55 }]

const result = students.map((x) => {
    return x.marks += 20;
}).filter((y) => {
    return y > 60
}).reduce((acc, ini) => {
    return acc + ini;
}, 0)




// const result = students.reduce((acc, ini) => {
//     return acc += ini.marks
// }, 0)

// const result = students.filter(x => {
//     return x.marks > 60 && x.rollno > 15
// }
// )

// const result = students.filter((x) => {
//     return x.marks > 60
// })

// const result = function (students) {
//     let output = [];
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].marks > 60) {
//             output.push(students[i])
//         }
//     }

//     return output;
// }


//const result = students.map((i) => {
//    return i.name.toUpperCase();
//})

// const result = function (students) {
//     let output = [];
//     for (let i = 0; i < students.length; i++) {
//         output.push(students[i].name.toUpperCase());
//     }
//     return output;
// }

console.log(result);



