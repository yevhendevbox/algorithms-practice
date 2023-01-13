function absoluteValueSumMinimization(arr: Array<number>): number {
  const isEven = arr.length % 2 === 0;

  return isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
}

// console.log(absoluteValueSumMinimization([2, 4, 7]));
// console.log(absoluteValueSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6, 8]));
