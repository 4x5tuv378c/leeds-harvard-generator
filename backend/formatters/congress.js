const { italic, bold } = require('../styleRules');

module.exports = function formatCongress(data) {
  const { committee, title, year, hearing_date, place, publisher, accessed, url } = data;
  const parts = [];
  if (committee) parts.push(`${committee}.`);
  if (year) parts.push(`${year}.`);
  if (title) parts.push(`${italic(title)}.`);
  if (hearing_date) parts.push(`Hearing, ${hearing_date}.`);
  parts.push('[Online].');
  if (place && publisher) parts.push(`${place}: ${bold(publisher)}.`);
  if (accessed) parts.push(`[Accessed ${accessed}].`);
  if (url) parts.push(`Available from: ${url}`);
  return parts.join(' ').trim();
};