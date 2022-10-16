const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const ears = "^^"
  let count = 0;
  matrix.forEach(arr => {
    arr.forEach(e => {
      if (e === ears) count += 1;
    })
  });
  return count;
}


console.log(countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
]));


module.exports = {
  countCats
};
