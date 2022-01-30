const Numericoder = require('../utils');

async function get({ query: { numericode } }, res) {
  try {
    const numericoder = new Numericoder();
    const message = numericoder.decode(numericode);
    res.status(200).send({ message });
  } catch (error) {
    res.status(500).send();
  }
}

module.exports = {
  get,
};
