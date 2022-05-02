const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
function dateSample(input) {
  if (!input) return false;
  if (typeof input != 'string') return false;
  let number = parseFloat(input);
  if (typeof number != 'number') return false;
  if (isNaN(number)) return false;
  if (number <= 0 || number > 15) return false;
  
  return Math.ceil(Math.log(MODERN_ACTIVITY/number) / (0.693 / HALF_LIFE_PERIOD));
  
}

module.exports = {
  dateSample
};
