function alphabeticShift(str: string): string {
  const letters = str.split('');
  const newArr = letters.map((el, idx) => {
    return el = String.fromCharCode(str.charCodeAt(idx) + 1);
  })
  return newArr.join('');
}

console.log(alphabeticShift('crazy'));
