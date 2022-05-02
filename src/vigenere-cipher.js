const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor (isDirect = true) {
      this.isDirect = isDirect;
    }
  
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    key = key.repeat(Math.ceil(message.length / key.length));
    let messageUC = message.toUpperCase();
    let keyUC = key.toUpperCase();
    let finalOutput = '';
    let keyCount = 0;


    for (let i in messageUC) {
      if (messageUC[i].match(/[A-Z]/)) {
        finalOutput += String.fromCharCode(((messageUC.charCodeAt(i) + keyUC.charCodeAt(keyCount)) % 26) + 65);
        keyCount++;
      } else {
        finalOutput += messageUC[i];
      }
    }

    return this.isDirect ? finalOutput : finalOutput.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    key = key.repeat(Math.ceil(message.length / key.length));
    let messageUC = message.toUpperCase();
    let keyUC = key.toUpperCase();
    let finalOutput = '';
    let keyCount = 0;

    for (let i in messageUC) {
      if (messageUC[i].match(/[A-Z]/)) {
        finalOutput += String.fromCharCode(((messageUC.charCodeAt(i) + 26 - keyUC.charCodeAt(keyCount)) % 26) + 65);
        keyCount++;
      } else {
        finalOutput += messageUC[i];
      }
    }

    return this.isDirect ? finalOutput : finalOutput.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
