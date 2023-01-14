function almostIncreasingSequence(arr: Array<number>): boolean {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      count++;
      if (arr[i] <= arr[i - 2] && arr[i + 1] <= arr[i - 2]) {
        return false;
      }
    }
  }

  return count <= 1;
}