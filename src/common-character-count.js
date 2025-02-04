const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const s1_arr = s1.split("");
  const s2_arr = s2.split("");
  s1_arr.forEach(e => {
    for (let i = 0; i < s2_arr.length; i++) {
      const element = s2_arr[i];
      if (e === element) {
        count += 1;
        s2_arr.splice(i, 1);
        break;
      }
    }
  })
  return count;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'), 3);
console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
console.log(getCommonCharacterCount('abca', 'xyzbac'), 3);
console.log(getCommonCharacterCount('', 'abc'), 0);
console.log(getCommonCharacterCount('a', 'b'), 0);

module.exports = {
  getCommonCharacterCount
};
