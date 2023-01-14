function addBorder(arr: Array<string>): Array<string> {
  const wall = '*'.repeat(arr[0].length + 2);
  arr.unshift(wall);
  arr.push(wall);
  for (let i = 1; i < arr.length - 1; i++) {
    arr[i] = '*'.concat(arr[i], '*');
  }
  return arr;
}