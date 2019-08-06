function bucketSort(arr, k = 10) {
    const buckets = [];
    for (let i = 0; i < k; i++) {
        buckets.push(new Array());
    }
    let max = Math.max(...arr);
    for (let unsortedNumber of arr) {
        let index = Math.floor(unsortedNumber / (max + 1));
    }
}
//# sourceMappingURL=bucketSort.js.map