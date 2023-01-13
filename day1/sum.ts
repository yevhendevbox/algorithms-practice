function sum(...arg: Array<number>): number {
  return arg.reduce((sum, num) => sum + num);
}

console.log(sum(1, 3, 5, 10));
