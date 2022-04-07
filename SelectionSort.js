let SelectionSort = (arr) => {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        console.log("running")
        let min = i
        for (let j = i+1; j<arr.length; j++) {
            if (arr[min] > arr[j]) {
                temp = min
                min = j
            }
        }
        if (arr[min] != arr[i]) {
            let temp1 = arr[temp]
            arr[i] = arr[min]
            arr[min] = temp1
        }
    }
    return arr
}


console.log(SelectionSort([3, 2, 5, 3, 1, 0.4, 2, 8]))