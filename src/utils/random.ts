
export function weightedRandom(outcome: string[], ratio: number[]): string {
  if (outcome.length !== ratio.length) {
    throw 'Cannot compute weighted randomness, outcome and ratio must be the same length';
  } else if (outcome.length === 0) {
    throw 'Cannot compute weighted randomness, outcome and ratio must have length greater than 0, preferably greater than 1';
  }
  const totalRandomness = ratio.reduce((sum, r) => sum + r, 0);
  const randomNumber = Math.random() * totalRandomness;

  let sum = 0;
  for(let i = 0; i < outcome.length; ++i) {
    sum += ratio[i]!;
    if (randomNumber < sum) {
      return outcome[i]!;
    }
  }
  return outcome[0]!;
}