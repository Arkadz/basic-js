const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.split('~~').length;
  },

  addLink(elem) {
    this.chain === undefined ? this.chain = `( ${elem} )` : this.chain = this.chain.split('~~').concat(`( ${elem} )`).join('~~');
    return this;
  },

  removeLink(position) {
    if (position < 1 || position > this.getLength() || !+position) {
      this.chain = undefined;
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain = this.chain.split('~~').filter((_, index) => index !== (position - 1)).join('~~');
     }
      return this;
  },

  reverseChain() {
    if (this.chain === undefined) return this;
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  
  finishChain() {
    let finishChain = this.chain;
    this.chain = undefined;
    return finishChain;
  }
};

module.exports = {
  chainMaker
};
