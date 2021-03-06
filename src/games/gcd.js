import { randomInt } from 'mathjs';
import { cons } from 'hexlet-pairs';
import run from '../runner';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (!y) {
    return x;
  }
  return findGcd(y, x % y);
};

const generateParams = () => {
  const x = randomInt(10, 60);
  const y = randomInt(10, 60);

  const question = `${x} ${y}`;
  const answer = findGcd(x, y);

  return cons(question, `${answer}`);
};

export default () => {
  run(description, generateParams);
};
