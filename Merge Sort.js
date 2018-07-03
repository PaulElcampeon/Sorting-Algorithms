function doMergeSort(arr){
    var mergeArr = arr.map((a)=>{
          return a;
        });
  if (mergeArr.length === 1) {
    // return once we hit an array with a single item
    return mergeArr
  }
  const middle = Math.floor(mergeArr.length / 2) // get the middle item of the array rounded down
  const left = mergeArr.slice(0, middle) // items on the left side
  const right = mergeArr.slice(middle) // items on the right side
  return merge(doMergeSort(left),doMergeSort(right))
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}