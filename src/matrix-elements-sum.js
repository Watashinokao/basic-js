const { NotImplementedError } = require("../extensions/index.js");

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
  let res = 0;
  matrix.map((arr, arrIndex) => {
    res = arr.reduce((acc, item, index) => {
      if (arrIndex === 0) {
        return (acc += item);
      } else if (matrix[arrIndex - 1][index] === 0) {
        return acc;
      } else return (acc += item);
    }, res);
  });
  return res;
}

module.exports = {
  getMatrixElementsSum,
};
