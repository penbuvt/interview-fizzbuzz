function fizzBuzzSingle(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return String(n);
  }
}

function fizzBuzz(n) {
  return Array(n).fill(0).map((_, i) => fizzBuzzSingle(i + 1));
}

module.exports = {
  fizzBuzzSingle,
  fizzBuzz,
};
