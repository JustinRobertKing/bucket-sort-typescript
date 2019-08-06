"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bucketSort(arr, k = 10) {
    let result = [];
    const buckets = [];
    for (let i = 0; i < k; i++) {
        buckets.push(new Array());
    }
    let max = Math.max(...arr);
    for (let unsortedNumber of arr) {
        let index = Math.floor((unsortedNumber / (max + 1)) * k);
        buckets[index].push(unsortedNumber);
    }
    for (let bucket of buckets) {
        insertionSort(bucket);
        result = [...result, ...bucket];
    }
    return result;
}
exports.default = bucketSort;
function insertionSort(arr) {
    let i = 1;
    while (i < arr.length) {
        let j = i;
        // console.log(`j and i:`, j, i)
        while (j > 0 && arr[j] < arr[j - 1]) {
            let x = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = x;
            // console.log(`swapping numbers:`, arr[j-1], arr[j]);
            j -= 1;
        }
        i++;
    }
}
//# sourceMappingURL=bucketSort.js.map