function binarySearch(arr: number[], value: number): boolean {
  console.log(arr);
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const m = Math.floor((low + high) / 2);
    const curr = arr[m];
    console.log(low, high, curr);

    if (curr === value) return true;
    else if (curr > value) high = m - 1;
    else low = m + 1;
  }

  return false;
}

console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 69));
