const componentGenerator = require('./plop-templates/component/prompt');
const containerGenerator = require('./plop-templates/container/prompt');
const pageGenerator = require('./plop-templates/page/prompt');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('page', pageGenerator);
};
