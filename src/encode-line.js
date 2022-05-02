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
  const len = str.length;
  let output = '';
  let counter = 1;
  for (let i = 0; i < len; i++) {
      if (str[i] == str[i + 1]) counter++;
      else {
        output += (((counter == 1) ? '' : counter) + str[i]);
        counter = 1;
      }
  }

  return output;

}

module.exports = {
  encodeLine
};

/*
let output = '';
let counter = 1;

for (let i in str) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      output = output + ((counter == 1) ? '' : counter) + str[i];
      counter = 1;
    }
}
return output;
*/