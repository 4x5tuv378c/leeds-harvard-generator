const { italic, bold } = require('../styleRules');

module.exports = function formatAct(data) {
  const { title, year, chapter, monarch, reign_year, place, publisher, url, accessed } = data;
  const parts = [];
  if (title && year) parts.push(`${italic(title)} ${year}.`);
  if (chapter && !monarch) parts.push(`(c. ${chapter}).`);
  if (chapter && monarch && reign_year) parts.push(`(${reign_year} ${monarch}, c. ${chapter}).`);
  if (url) parts.push('[Online].');
  if (place && publisher) parts.push(`${place}: ${bold(publisher)}.`);
  if (url && accessed) { parts.push(`[Accessed ${accessed}].`); parts.push(`Available from: ${url}`); }
  return parts.join(' ').trim();
};
