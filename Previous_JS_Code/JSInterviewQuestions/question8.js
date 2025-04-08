// program to find the largest element in a nested array

const arr = [1, 2, 5, 105, 3, 9, [20, 2, 400, 1, [7, 55, 2, [300]]]];

function LargestVal(arr, result = 0) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return LargestVal(arr[i], result)
        }
        else {
            if (result < arr[i]) {
                result = arr[i]
            }
        }
    }

    return result;
}

console.log(LargestVal(arr));







// using flat method, dept value

let result = arr.flat(3)
let max = 0;
function largest(result) {
    for (let i = 0; i < result.length; i++) {
        if (max < result[i]) {
            max = result[i]
        }
    }
    console.log(max)
}

//largest(result);