function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let t: number;
        t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 3, 5, 1, 20, 2, 4, 10]));
