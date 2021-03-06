// The largest value bubbles to the top
// time complexity O(n^2)

const bubbleSort = (arr) => {
    let noSwaps;
  for (let i = arr.length; i > 0; i--) {
      noSwaps = true
    // console.log(arr)
    for (let j = 0; j < i - 1; j++) {
      let swap = false
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false
      }
    }
    if (noSwaps) {
        break
    }
  }
  return arr;
};

console.log(bubbleSort([37, 45, 29, 8]));
