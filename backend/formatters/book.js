const { italic, bold } = require('../styleRules');

module.exports = function formatBook(data) {
  const { author, year, title, edition, place, publisher } = data;
  const parts = [];
  if (author) parts.push(`${author}.`);
  if (year) parts.push(`${year}.`);
  if (title) parts.push(`${italic(title)}.`);
  if (edition && edition.toLowerCase() !== '1st') parts.push(`${edition} ed.`);
  if (place && publisher) parts.push(`${place}: ${bold(publisher)}.`);
  return parts.join(' ').trim();
};
