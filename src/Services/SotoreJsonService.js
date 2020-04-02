module.exports = {
  getContent
};

function getContent() {
  const store = require('../store/electronStorage');
  return store;
}