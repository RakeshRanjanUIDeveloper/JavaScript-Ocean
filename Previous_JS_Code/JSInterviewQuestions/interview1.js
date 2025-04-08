// let arr = [2023, 2024, 2025, 2026, 2027, 2028, 2029];

// console.log(arr.filter((res) => res % 4 == 0));


// 10209187126
// 10*****7126

// let curr = 10209187126;
// let firstVal = 2;
// let lastVal = 7;


// console.log(String(curr).split('').map((res, index) => {
//     if (index >= firstVal && index <= lastVal) {
//         return '*';
//     }
//     return res;
// }).join(''));


console.log('Delhi');
setTimeout(function () {
    console.log('Mumbai')
}, 0)

const p1 = () => {
    return new Promise((resolve, reject) => {
        console.log('Agra')
        resolve('Kolkata')
        console.log('Kochi')
    })
}

console.log('Ajmer')

p1().then((res) => {
    console.log(res)
})

// Delhi 
// Ajmer
// Agra
// Kochi
// Kolkata
// Mumbai