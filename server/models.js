const cards = { results: [] };

const getCardModels = function() {
  return cards;
};
const postCardModels = function(card) {
  cards.results.push(card);
  return card;
};

module.exports = {
  getCardModels,
  postCardModels
};
