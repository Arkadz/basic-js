const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)) throw new Error("'arr' parameter must be an instance of the Array!");
  
  const buffer = array.slice();
  len = array.length-1;

  array.forEach((item, index)=>{
    switch(item) {
      case '--discard-next':
        if (index !== len) buffer[index + 1] = ''; 
        buffer[index] = '';
        break;

      case '--discard-prev':
        if (index !== 0) buffer[index - 1] = '';
        buffer[index] = '';
        break;

      case '--double-next':
        index !== len ? buffer[index] = buffer[index + 1] : buffer[index] = ''; 
        break;

      case '--double-prev':
        index !== 0 ? buffer[index] = buffer[index - 1] : buffer[index] = '';  
        break;
  }
 });
 return buffer.filter(item=>item);

}

module.exports = {
  transform
};
