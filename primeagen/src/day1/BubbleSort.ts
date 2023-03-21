export default function bubble_sort(arr: number[]): void {
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
}
