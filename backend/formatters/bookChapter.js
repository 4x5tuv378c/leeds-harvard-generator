const { italic, bold } = require('../styleRules');

module.exports = function formatBookChapter(data) {
  const { author, year, chapter_title, editor, book_title, edition, translator, place, publisher, pages, accessed, url } = data;
  const parts = [];
  if (author) parts.push(`${author}.`);
  if (year) parts.push(`${year}.`);
  if (chapter_title) parts.push(`${chapter_title}.`);
  if (editor) parts.push(`In: ${editor}. ed(s).`);
  if (book_title) parts.push(`${italic(book_title)}.`);
  if (url) parts.push('[Online].');
  if (edition && edition.toLowerCase() !== '1st') parts.push(`${edition} ed.`);
  if (translator) parts.push(`Translated by ${translator}.`);
  if (place && publisher) parts.push(`${place}: ${bold(publisher)},`);
  if (pages) parts.push(`${pages}.`);
  if (url && accessed) { parts.push(`[Accessed ${accessed}].`); parts.push(`Available from: ${url}`); }
  return parts.join(' ').trim();
};