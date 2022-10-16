const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = [];
  let counter = 1,
      tempArr = [],
      finalStr = '';

  str.split('').forEach(item => strArr.push(item));

  for (let i = 1; i <= strArr.length; i++) {
    if (strArr[i] == strArr[i-1]) {
      counter++;
      if (i == strArr.length) {
        if (counter == 1) {
          tempArr.push(strArr[i]);
          counter = 1;
        } else {
          tempArr.push(counter + strArr[i]);
          counter = 1;
        }
      }    
    } else {
      if (counter == 1) {
        tempArr.push(strArr[i-1]);
        counter = 1;
      } else {
        tempArr.push(counter + strArr[i-1]);
        counter = 1;
    }
    }
  }
  finalStr = tempArr.join('');
  return finalStr;
}

module.exports = {
  encodeLine
};
