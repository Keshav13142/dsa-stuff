function binarySearch(arr: number[], value: number): boolean {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const m = Math.floor(low + high / 2);
    const curr = arr[m];

    if (curr === value) return true;
    else if (curr > value) low = m + 1;
    else high = m - 1;
  }

  return false;
}

console.log(binarySearch([100, 20, 40, 12, 45, 12], 20));
