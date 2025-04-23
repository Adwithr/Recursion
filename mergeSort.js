function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      arr.push(leftArr[i]);
      i++;
    } else {
      arr.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    arr.push(leftArr[i]);
    i++;
  }

  while (j < rightArr.length) {
    arr.push(rightArr[j]);
    j++;
  }

  return arr;
}

const unsortedArr = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArr = mergeSort(unsortedArr);
console.log(sortedArr);
