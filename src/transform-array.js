const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  const doubleNext = '--double-next'
  const discardNext = '--discard-next'
  const discardPrev = '--discard-prev'
  const doublePrev = '--double-prev'
  const temp = []
  let dN = false

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === discardNext) continue
    else if (element === discardPrev) {
      temp.pop()
    }
    else if (element === doubleNext) {
      dN = true
    } else if (element === doublePrev) {
      temp.pop()
      temp.push(element * 2)
    } else {
      if (dN) temp.push(element * 2)
      else { temp.push(element); dN = false; }
    }
  }
  return temp;
}

module.exports = {
  transform
};

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
//output: [1, 2, 3, 4, 5]


console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
// output: [1, 2, 3, 1337, 1337, 1337, 4, 5]


console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
// output: [1, 2, 3, 4, 5]

console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))
            // output: [1, 2, 3, 1337, 4, 5]
