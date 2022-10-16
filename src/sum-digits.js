const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString().split("")
  let newSum = ""
  while (newSum.length !== 1) {
    newSum = str.reduce((p, n) => parseInt(p) + parseInt(n), 0).toString()
    str = newSum.toString().split("")
  }

  return parseInt(newSum)
}

module.exports = {
  getSumOfDigits
};


console.log(getSumOfDigits(91), 1);
console.log(getSumOfDigits(100), 1);
console.log(getSumOfDigits(35), 8);
console.log(getSumOfDigits(99), 9);
console.log(getSumOfDigits(123), 6);