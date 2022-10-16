const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = ""
  let [repeatTimes, separator, addition, additionRepeatTimes, additionSeparator] = Object.values(options)
  additionRepeatTimes = additionRepeatTimes === undefined ? 0 : additionRepeatTimes
  const fullRepeatTimes = repeatTimes + additionRepeatTimes
  additionSeparator = additionSeparator === undefined ? "" : additionRepeatTimes
  const fullSeparator = separator + additionSeparator
  for (let i = 0; i < fullRepeatTimes; i++) {
    result += fullSeparator;
  }
  return result
}
console.log(repeater('la', { repeatTimes: 3 }), 'la+la+la');
console.log(repeater('single', { repeatTimes: 1 }), 'single');
console.log(repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345');

console.log(repeater('la', { repeatTimes: 3, separator: 's' }), 'laslasla');
console.log(repeater('point', { repeatTimes: 3, separator: '&&&' }), 'point&&&point&&&point');
console.log(repeater('12345', { repeatTimes: 5, separator: '3 words separator' }), '123453 words separator123453 words separator123453 words separator123453 words separator12345');
module.exports = {
  repeater
};
