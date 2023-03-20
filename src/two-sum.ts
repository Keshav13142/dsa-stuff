function twoSumBrute(arr: number[], sum: number): number[] | null | undefined {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return [i, j];
    }
  }
  return null;
}

function twoSumOpt(arr: number[], sum: number): number[] | null | undefined {
  for (let i = 0; i < arr.length - 1; i++) {
    let ind = arr.indexOf(sum - arr[i]);
    if (ind) return [i, ind];
  }
  return null;
}

function twoSumObj(arr: number[], sum: number): number[] | null | undefined {
  let obj: Record<number, number> = {};

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (obj[sum - curr] >= 0) {
      return [obj[sum - curr], i];
    } else {
      obj[curr] = i;
    }
  }

  return null;
}

console.log(twoSumObj([10, 20, 0], 10));
