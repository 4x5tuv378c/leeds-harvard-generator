const { italic } = require('../styleRules');

module.exports = function formatThesis(data) {
  const { author, year, title, qualification, institution } = data;
  const parts = [];
  if (author) parts.push(`${author}.`);
  if (year) parts.push(`${year}.`);
  if (title) parts.push(`${italic(title)}.`);
  if (qualification && institution) parts.push(`${qualification}, ${institution}.`);
  return parts.join(' ').trim();
};