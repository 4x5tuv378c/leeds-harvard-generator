const { italic, bold } = require('../styleRules');

module.exports = function formatBill(data) {
  const { title, year, house, number, session, place, publisher, url, accessed } = data;
  const parts = [];
  if (title && year) parts.push(`${italic(title)}. ${year}.`);
  if (house && number && session) parts.push(`(${house} Bill ${number}, ${session}).`);
  if (url) parts.push('[Online].');
  if (place && publisher) parts.push(`${place}: ${bold(publisher)}.`);
  if (url && accessed) { parts.push(`[Accessed ${accessed}].`); parts.push(`Available from: ${url}`); }
  return parts.join(' ').trim();
};
