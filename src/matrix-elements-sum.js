const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const arr = transformMatrix(matrix);
  arr.forEach(e => {
    let len = e.length;
    for (let i = 0; i < len; i++) {
      const element = e[i];
      if (i === len - 1 && element !== 0) sum += element;
      else if (i < len - 1 && e[i + 1] !== 0) sum += element;
    }
  })
  return sum;
}


function transformMatrix(matrix) {
  const arr = [];
  for (let j = 0; j < matrix[0].length; j++) {
    const t = []
    for (let i = 0; i < matrix.length; i++) {
      t.push(matrix[i][j]);
    }
    arr.push(t.reverse())
  }
  return arr;
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]
console.log(getMatrixElementsSum(matrix));


console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]), 9);

console.log(getMatrixElementsSum([
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]), 15);

console.log(getMatrixElementsSum([
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
]), 18);

console.log(getMatrixElementsSum([
  [0],
]), 0);

console.log(getMatrixElementsSum([
  [1],
  [5],
  [0],
  [2],
]), 6);

module.exports = {
  getMatrixElementsSum
};
