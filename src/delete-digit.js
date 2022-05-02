const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');
  let output = 0;
  for (let i in array) {
      const buffer = array.slice();
      buffer.splice(i, 1);
      output = Math.max(output, +buffer.join(''))
  }
  return output;

}

module.exports = {
  deleteDigit
};
