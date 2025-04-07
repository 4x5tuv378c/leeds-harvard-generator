const { italic, bold } = require('../styleRules');

module.exports = function formatEbook(data) {
  const { author, editor, year, title, edition, translator, place, publisher, accessed, url, reader } = data;
  const parts = [];
  if (author) parts.push(`${author}.`);
  else if (editor) parts.push(`${editor}. ed(s).`);
  if (year) parts.push(`${year}.`);
  if (title) parts.push(`${italic(title)}.`);
  if (url) parts.push('[Online].');
  if (edition && edition.toLowerCase() !== '1st') parts.push(`${edition} ed.`);
  if (reader) parts.push(`[${reader}].`);
  if (translator) parts.push(`Translated by ${translator}.`);
  if (place && publisher) parts.push(`${place}: ${bold(publisher)}.`);
  if (url && accessed) { parts.push(`[Accessed ${accessed}].`); parts.push(`Available from: ${url}`); }
  return parts.join(' ').trim();
};