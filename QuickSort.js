const pivot = (arr, start = 0, end = arr.length + 1) => {
  function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp
  }


  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
};

const QuickSort = (arr, left=0, right=arr.length-1) => {
    if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    QuickSort(arr,left,pivotIndex-1)
    QuickSort(arr, pivotIndex+1, right);
    }
    return arr
}

console.log(QuickSort([1,2,510,2,51,6,1,0.2]))
