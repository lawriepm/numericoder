const { createRequest, createResponse } = require('node-mocks-http');
const errors = require('../../constants/messages.json');
const { validateNumericode } = require('../../middleware');

let res;
let next;
let req;

function setArgs(numericode) {
  res = createResponse();
  next = jest.fn();
  req = createRequest({
    method: 'GET',
    url: '/',
    query: {
      numericode,
    },
  });
}

describe('Middlewear', () => {
  describe('When numericode is valid', () => {
    it('call next()', () => {
      setArgs('13 27 26 5');
      validateNumericode(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });

  describe('When numericode is falsey', () => {
    beforeEach(() => {
      setArgs();
      validateNumericode(req, res, next);
    });

    it('sends a response with a 422 status', () => {
      expect(res.statusCode).toEqual(422);
    });
    
    it(`has the response message ${errors.NUMERICODE.NO_NUMERICODE}`, () => {
      const { message } = res._getData();
      expect(message).toEqual(errors.NUMERICODE.NO_NUMERICODE);
    });

    it('does not call next()', () => {
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('When numericode is invalid', () => {
    beforeEach(() => {
      setArgs('111 222 aaa');
      validateNumericode(req, res, next);
    });

    it('sends a response with a 422 status', () => {
      expect(res.statusCode).toEqual(422);
    });

    it(`has the response message ${errors.NUMERICODE.INVALID_NUMERICODE}`, () => {
      const { message } = res._getData();
      expect(message).toEqual(errors.NUMERICODE.INVALID_NUMERICODE);
    });

    it('does not call next()', () => {
      expect(next).not.toHaveBeenCalled();
    });
  });
});
