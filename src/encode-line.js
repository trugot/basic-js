const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('')
  let i = 0, j = 1;
  const result = []
  for (; j <= array.length; j++) {
    if (array[i] !== array[j]) {
      result.push(array.slice(i, j).length + array[i])
      i = j
    }
  }
  return result.join("").replaceAll('1', "");

}

console.log(encodeLine('aaaatttt'), '4a4t');
console.log(encodeLine('aabbccc'), '2a2b3c');
console.log(encodeLine('abbcca'), 'a2b2ca');
console.log(encodeLine('xyz'), 'xyz');
console.log(encodeLine(''), '');



module.exports = {
  encodeLine
};
