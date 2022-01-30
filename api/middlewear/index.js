const errors = require('../constants/messages.json');

function validateNumericode(req, res, next) {
  if (!req.query.numericode) {
    return res.status(422).send({ message: errors.NUMERICODE.NO_NUMERICODE });
  }

  const { numericode } = req.query;
  if (numericode.search(/^[0-9\s]*$/)) {
    return res.status(422).send({ message: errors.NUMERICODE.INVALID_NUMERICODE });
  }

  next();
}

module.exports = {
  validateNumericode,
};
