const formatters = {
  act: require('./formatters/act'),
  bill: require('./formatters/bill'),
  book: require('./formatters/book'),
  book_chapter: require('./formatters/bookChapter'),
  ebook: require('./formatters/ebook'),
  journal: require('./formatters/journal'),
  thesis: require('./formatters/thesis'),
  newspaper: require('./formatters/newspaper'),
  press_release: require('./formatters/pressRelease'),
  report: require('./formatters/report'),
  website: require('./formatters/website'),
  congress: require('./formatters/congress'),
  senate_report: require('./formatters/senateReport')
};

function formatReference(type, data) {
  if (!formatters[type]) throw new Error(`No formatter for type: ${type}`);
  return formatters[type](data);
}

module.exports = formatReference;
