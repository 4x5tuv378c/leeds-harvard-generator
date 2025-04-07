const { italic } = require('../styleRules');

module.exports = function formatJournal(data) {
  const { author, year, article_title, journal, volume, issue, pages, accessed, doi, url, article_no, supplement, prepost } = data;
  const parts = [];
  if (author) parts.push(`${author}.`);
  if (year) { const label = prepost ? `[${prepost}]` : ''; parts.push(`${year} ${label}`.trim() + '.'); }
  if (article_title) parts.push(`${article_title}.`);
  if (journal) parts.push(`${italic(journal)}.`);
  const volSec = volume ? `${volume}` : '';
  const issSec = issue ? `(${issue})` : '';
  const suppSec = supplement ? `(Supp. ${supplement})` : '';
  const pagesSec = pages ? `, ${pages}` : '';
  if (article_no && !pages) parts.push(`${volSec}${suppSec}, article no: ${article_no} [no pagination].`);
  else if (volSec || issSec || suppSec || pagesSec) parts.push(`${volSec}${suppSec}${issSec}${pagesSec}.`);
  if (url || doi) {
    parts.push('[Online].');
    if (accessed) parts.push(`[Accessed ${accessed}].`);
    if (doi) parts.push(`Available from: https://doi.org/${doi}`);
    else if (url) parts.push(`Available from: ${url}`);
  }
  return parts.join(' ').trim();
};