const { italic, bold } = require('../styleRules');

module.exports = function formatSenateReport(data) {
  const { committee, year, title, report_number, place, publisher, accessed, url } = data;
  const parts = [];
  if (committee) parts.push(`${committee}.`);
  if (year) parts.push(`${year}.`);
  if (title) parts.push(`${italic(title)}.`);
  if (report_number) parts.push(`(${report_number}).`);
  parts.push('[Online].');
  if (place && publisher) parts.push(`${place}: ${bold(publisher)}.`);
  if (accessed) parts.push(`[Accessed ${accessed}].`);
  if (url) parts.push(`Available from: ${url}`);
  return parts.join(' ').trim();
};