const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    const output = [];
    const len = matrix.length;

  for (let i = 0; i < len; i++) {
    
    let line = matrix[i];

    let outputLine = [];

    for (let k = 0; k < line.length; k++) {
      
      let number = 0;
      
      if (i !== 0) {
        number += Boolean(matrix[i - 1][k - 1]);
        number += matrix[i - 1][k];
        number += Boolean(matrix[i - 1][k + 1]);
      } else if (i !== len - 1) {
        number += Boolean(matrix[i + 1][k - 1]);
        number += matrix[i + 1][k];
        number += Boolean(matrix[i + 1][k + 1]);
      }
            
      if (k != 0) {
        number += line[k - 1];
      } else if (k != line.length - 1) {
        number += line[k + 1];
      } 
      
      outputLine.push(number);

    }

    output.push(outputLine);
  }
  return output;

}

module.exports = {
  minesweeper
};
