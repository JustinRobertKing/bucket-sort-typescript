export default function bucketSort(arr: number[], k: number = 10): number[] {
	let result: number[] = [];
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
		console.log('bucket', bucket)
		insertionSort(bucket);
		result = [...result, ...bucket]
	}
	return result;
}





function insertionSort<T>(arr: Array<T>): void {
  let i: number = 1
  while (i < arr.length) {
    let j: number = i
    // console.log(`j and i:`, j, i)
    while (j > 0 && arr[j] < arr[j-1]) {
      let x: T = arr[j]
      arr[j] = arr[j-1]
      arr[j-1] = x
      // console.log(`swapping numbers:`, arr[j-1], arr[j]);
      j -= 1;
    }
    i++;
  }
}