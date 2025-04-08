let arrNum = [1, 3, 2, 5, 4, 7];

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Each pass through the array guarantees that the largest element in the
        // remaining unsorted portion will be moved to the end, so we can decrease n
        n--;
    } while (swapped);

    return arr;
}

let sortedArray = bubbleSort(arrNum);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 7]
