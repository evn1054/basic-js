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
 function deleteDigit(intNumber) {
  const arrFromInt = intNumber.toString().split('');
  let tempArr = [];

  for (let i = 0; i < arrFromInt.length; i++) {
    tempArr.push(arrFromInt.filter((item, index) => index != i).join(''));
  }

  return Number(tempArr.sort((a, b) => b - a)[0]);
}

module.exports = {
  deleteDigit
};
