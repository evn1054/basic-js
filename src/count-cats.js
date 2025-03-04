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
  // throw new NotImplementedError('Not implemented');
  let totalCats = 0;
  matrix.forEach(arr => arr.forEach(item => {
    if (item == '^^') {
      totalCats++;
    }
  }))
  return totalCats; 
}

module.exports = {
  countCats
};
