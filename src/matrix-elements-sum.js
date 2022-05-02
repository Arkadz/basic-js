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
  const columns = matrix[0].length;
  const rows = matrix.length;
    
  let result = 0;
  
  for (let i = 0; i < columns; i++) {
      for (let k = 0; k < rows; k++) {
          if (matrix[k][i] == 0) break;
          result += matrix[k][i];
      }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
