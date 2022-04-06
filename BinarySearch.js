//function accepts a sorted array
const binarySearch = (arr, value) => {
  // init leftPointer to be first array element
  // init rightPointer to be last array element
  // init middlePointer
  let leftPointer = 0
  let rightPointer = arr.length - 1
  let middlePointer = Math.ceil(rightPointer / 2)

  if (arr[leftPointer] == value) {
    console.log(leftPointer)
    return leftPointer
  }
  if (arr[rightPointer] == value) {
    return rightPointer
  }

  // while leftPointer comes before rightPointer
  while (leftPointer < rightPointer) {
    // if the middlePointer, then middlePointer = value
    if (arr[middlePointer] === value) {
      return middlePointer 
    } else if (arr[middlePointer] < value) {
      // if middlePointer is < value, then leftPointer = middlePointer
      leftPointer = middlePointer
      middlePointer = Math.ceil((rightPointer - leftPointer) * 1.5)
    } else {
  // if middlePointer is > value, then rightPointer = middlePointer
     rightPointer = middlePointer
     middlePointer = Math.ceil((rightPointer - leftPointer) / 2);
   }
  // if value isn't found, then return -1
  }
  return -1
}

console.log(binarySearch([1], 1))

// best case O(1)
// worst case O(log(n))