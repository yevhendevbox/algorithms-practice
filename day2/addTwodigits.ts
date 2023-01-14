function addTwoDigits(n: number): number {
  const evolve = n.toString().split('');
  return evolve.reduce((sum, num) => sum + parseInt(num), 0);
}

function addTwoDigits2(n: number): number {
  const evolve = n.toString().split('');
  return parseInt(evolve[0]) + parseInt(evolve[1]);
}