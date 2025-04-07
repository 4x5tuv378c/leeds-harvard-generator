const { italic } = require('../styleRules');

module.exports = function formatPressRelease(data) {
  const { org, year, title, accessed, url } = data;
  const parts = [];
  if (org) parts.push(`${org}.`);
  if (year) parts.push(`${year}.`);
  if (title) parts.push(`${italic(title)}.`);
  parts.push('[Press release].');
  if (accessed) parts.push(`[Accessed ${accessed}].`);
  if (url) parts.push(`Available from: ${url}`);
  return parts.join(' ').trim();
};