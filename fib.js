function fibs(n) {
  if (n <= 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const sequence = fibsRec(n - 1);
  const nextSequence = sequence[n - 2] + sequence[n - 3];
  sequence.push(nextSequence);
  return sequence;
}

console.log(fibsRec(8));
