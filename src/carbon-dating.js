const { NotImplementedError } = require('../extensions/index.js');



/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
let parseFloatSampleActivity = 0;

function dateSample(sampleActivity) {
  if (typeof(sampleActivity) == 'string') {
    parseFloatSampleActivity = parseFloat(sampleActivity);
  } else return false;


  if ((parseFloatSampleActivity > 0) && (parseFloatSampleActivity < 15)) {
    let sampleAge = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloatSampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
    return sampleAge;
  } else {
    console.log('We are here');
    return false;
  }

}

module.exports = {
  dateSample
};


