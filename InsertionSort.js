// Start by picking the second element in the array
// compare the second element with the one before it and swap if necessary
// continue to the next element if it is in the incorrect order, iterate throughg the sorted portion (i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.

const insertionSort = (arr) => {
    for (let i = 1; i<arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0  && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

console.log(insertionSort([3,2,1]))