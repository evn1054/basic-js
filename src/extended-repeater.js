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
function repeater(str, options ) {
  // throw new NotImplementedError('Not implemented');
  let srtArr = [], // финальный массив, который уже будет превращён в финальую строку
      subStrArr = [], // это массив для формирования подстроки subStr, если addition есть 
      subStr = '', // это подстрока которую выводит функция setSubString
      finalStr = '', // это финальная строка, она формируется из финально массива srtArr и выводится в главный return
      optionObj = {  // это объект, который мы заполняем на основе входящего options
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|',
      };

    // определяем repeatTimes
    if (options.repeatTimes) {
      optionObj.repeatTimes = options.repeatTimes;
    } 

    // определяем separator
    if (options.separator) {
      optionObj.separator = options.separator;
    } 
    
    // определяем addition
    if (options.hasOwnProperty('addition')) {
      if (String(options.addition)) {
        optionObj.addition = options.addition;
      } 
    }

    // определяем additionRepeatTimes
    if (options.additionRepeatTimes) {
      optionObj.additionRepeatTimes = options.additionRepeatTimes;
    } 

    // определяем additionSeparator
    if (options.additionSeparator) {
      optionObj.additionSeparator = options.additionSeparator;
    } 

    // цикл для формирования подстроки
  for (let i = 1; i <= optionObj.additionRepeatTimes; i++) {
    (i == optionObj.additionRepeatTimes) ? subStrArr.push(String(optionObj.addition)) : subStrArr.push(optionObj.addition + optionObj.additionSeparator);
  }
  subStr = subStrArr.join(''); // подстрока

  // цикл для формирования финального массива из которого будет получена финальная строка
  for (let i = 1; i <= optionObj.repeatTimes; i++) {
    (i == optionObj.repeatTimes) ? srtArr.push(str + subStr) : srtArr.push(str + subStr + optionObj.separator);
  }
  finalStr = srtArr.join('');


  return finalStr;

}

module.exports = {
  repeater
};