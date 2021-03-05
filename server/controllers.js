const models = require('./models');

const getCardController = function(req, res) {
  const cards = models.getCardModels();
  res.status(200).send(cards);
};

const postCardController = function(req, res) {
  const { body } = req;
  models.postCardModels(body);
  res.status(201).send('success');
};

module.exports = {
  getCardController,
  postCardController
};
