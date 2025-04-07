const { italic } = require('../styleRules');

module.exports = function formatWebsite(data) {
  const { author, year, title, accessed, url } = data;
  const parts = [];
  if (author) parts.push(`${author}.`);
  parts.push(year && year.toLowerCase() !== 'unknown' ? `${year}.` : 'Unknown.');
  if (title) parts.push(`${italic(title)}.`);
  parts.push('[Online].');
  if (accessed) parts.push(`[Accessed ${accessed}].`);
  if (url) parts.push(`Available from: ${url}`);
  return parts.join(' ').trim();
};