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

  let sum =0 
  let v=0

  for (let h=0; h<=matrix.length; h++){
    if (h == matrix.length) {
      h = 0;
      v++;
    }
    if (v == matrix[0].length) {
      return sum
    }
    if (matrix[h][v] == 0) {
        v++;
        h=-1;
    } else {
      sum += matrix[h][v]
    }
  }
}


module.exports = {
  getMatrixElementsSum
};
