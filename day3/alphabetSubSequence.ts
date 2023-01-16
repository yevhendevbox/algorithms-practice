function alphabeticShift(s: string): boolean {
  let charsValues: number[] = [];

  for (let i = 0; i < s.length; i++) {
    charsValues.push(s.charCodeAt(i));
  }

  if (new Set(charsValues).size !== charsValues.length) {
    return false;
  };

  for (let i = 0; i < charsValues.length - 1; i++) {
    if (charsValues[i] >= charsValues[i + 1]) {
      return false;
    }
  }

  return true;
}

// console.log(alphabeticShift('effg'));
// console.log(alphabeticShift('cdce'));
// console.log(alphabeticShift('ace'));
// console.log(alphabeticShift('bxz'));
