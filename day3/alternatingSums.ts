function alternatingSums(arr: Array<number>): Array<number> {
  let group1: number = 0;
  let group2: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      group1 += arr[i];
    } else {
      group2 += arr[i];
    }
  }

  return [group1, group2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
