const Numericoder = require('../../utils');
const errors = require('../../constants/messages.json');

const numericoder = new Numericoder();

describe('numericoder.decode()', () => {
  [
    {
      numericode: '13 27 26 5',
      assertion: 'MAZE',
    },
    {
      numericode: '432 21 19 5832 5 135 14 6561 59049 15 486 275562',
      assertion: 'PUSHEENICORN',
    },
    {
      numericode: '20 486 21 513 19 324 5 21924 540 135 3 8',
      assertion: 'TRUSSLE TECH',
    },
    {
      numericode: '8 5 324 8748 295245 730 23 405 13122 12 108',
      assertion: 'HELLO WORLD',
    },
    {
      numericode: '6 15 15 28 2 1 18',
      assertion: 'FOO BAR',
    },
  ].forEach(({
    numericode,
    assertion,
  }) => {
    describe(`when called with ${numericode}`, () => {
      it(`returns ${assertion}`, () => {
        const message = numericoder.decode(numericode);
        expect(message).toEqual(assertion);
      });
    });
  });

  describe('when numericode is falsey', () => {
    it(`throws an error with the message ${errors.NUMERICODE.NO_NUMERICODE}`, () => {
      try {
        numericoder.decode();
      } catch (e) {
        expect(e.message).toEqual(errors.NUMERICODE.NO_NUMERICODE);
      }
    });
  });

  describe('when numericode is invalid', () => {
    it(`throws an error with the message ${errors.NUMERICODE.INVALID_NUMERICODE}`, () => {
      try {
        numericoder.decode('111 aaa');
      } catch (e) {
        expect(e.message).toEqual(errors.NUMERICODE.INVALID_NUMERICODE);
      }
    });
  });
});
