function allLongestStrings(arr: Array<string>): Array<string> {
  let longestStringLength = arr[0].length;

  for (let i = 0; i < arr.length - 1; i++) {
    const currentStringLength = arr[i].length;
    longestStringLength = currentStringLength > longestStringLength ? currentStringLength : longestStringLength;
  }
  return arr.filter(el => el.length === longestStringLength);;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
