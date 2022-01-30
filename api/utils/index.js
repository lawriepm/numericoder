const errors = require('../constants/messages.json');

class Numericoder {

  constructor() {
    this.MAX_NO = 27;
  }

  #diviseToRoot(number) {
    let num = number;
    while (num >= this.MAX_NO) {
      num /= this.MAX_NO;
    }
    return num;
  }

  #getLetter(num) {
    return String.fromCharCode(num + 64);
  }

  decode(numericode) {
    if (!numericode) {
      throw new Error(errors.NUMERICODE.NO_NUMERICODE);
    }

    const numbers = numericode.split(/\s/);

    return numbers.reduce(((message, i) => {
      const number = Number(this.#diviseToRoot(i));
      if (Number.isNaN(number)) {
        throw new Error(errors.NUMERICODE.INVALID_NUMERICODE);
      }

      if (!Number.isInteger(number)) {
        return `${message} `;
      }

      return `${message}${this.#getLetter(number)}`;
    }), '');
  }
}

module.exports = Numericoder;
