// program to convert a string to title case (capitalize the first letter of each word)



// const name = "rajat das"
// let filteredName = name.split(' ')

// function Convertor(filteredName) {
//     for (let i = 0; i < filteredName.length; i++) {
//         //let innerName = filteredName[i];
//         console.log(filteredName[i].charAt(0).toUpperCase());
//         // for (let j = 0; j < innerName.length; j++) {
//         //     console.log(innerName[j])
//         // }
//     }
// }

// Convertor(filteredName)


var result = [];
for (var i = 0; i < 10; i++) {
    result.push(function () {
        return i;
    })
}
console.log(result[1]());