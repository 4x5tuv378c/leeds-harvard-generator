const { italic } = require('../styleRules');

module.exports = function formatNewspaper(data) {
  const { author, year, title, newspaper, date, page, cartoon, accessed, url } = data;
  const parts = [];
  if (author) parts.push(`${author}.`);
  if (year) parts.push(`${year}.`);
  if (title) parts.push(`${title}.`);
  if (newspaper) parts.push(`${italic(newspaper)}.`);
  if (date) parts.push(`${date},`);
  if (page) parts.push(`${page}.`);
  if (url) {
    parts.push('[Online].');
    if (accessed) parts.push(`[Accessed ${accessed}].`);
    parts.push(`Available from: ${url}`);
  }
  return parts.join(' ').trim();
};