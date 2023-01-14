function adjacentElementsProduct(arr: Array<number>): number {
  let product: number = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    let temp = arr[i] * arr[i + 1];
    product = temp > product ? temp : product;
  }
  return product;
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 6]));
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 9]));
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 22]));
