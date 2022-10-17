const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // return arr.sort((a,b) => {
  //   if (!(a == -1) || !(b == -1)) {
  //     a - b;
  //   }
  // })

  let minusArr = [],
      intermideateSortedArr = [];
      finalArr = [];

  arr.forEach((item, index) => {
    if (item < 0) {
      minusArr.push(index)
    } else {
      intermideateSortedArr.push(item);
    } 
  })

  intermideateSortedArr.sort((a, b) => a - b);
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (minusArr.includes(i)) {
      finalArr.push(-1);
      counter++;
    } else {
      finalArr.push(intermideateSortedArr[i - counter]);
    }
  }

  return finalArr;
}
// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
module.exports = {
  sortByHeight
};
