const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      results.push(arr2[j]);
      j++;
    } else if (arr2[j] === arr1[i]) {
      results.push(arr2[j]);
      results.push(arr1[i]);
      i++;
      j++;
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
  }

  return results;
};

const mergeSort = (arr) => {
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


console.log(mergeSort([1,4,21,13,7,235,0,-4,2]))