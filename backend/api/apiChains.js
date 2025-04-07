const API_CHAINS = {
  act: ["legislation_gov_uk", "uk_gov", "parliament_acts", "google_books", "google_search"],
  bill: ["uk_parliament", "uk_gov", "parliament_bills", "google_books", "google_search"],
  book: ["crossref", "open_library", "google_books", "worldcat", "jstor", "isbndb", "proquest", "cambridge", "wiley", "taylor_francis", "bloomsbury", "routledge"],
  book_chapter: ["crossref", "open_library", "google_books", "worldcat", "isbndb", "proquest", "jstor", "cambridge", "wiley", "taylor_francis", "routledge", "springer"],
  ebook: ["crossref", "open_library", "google_books", "isbndb", "proquest_ebooks", "jstor", "worldcat", "cambridge", "wiley", "taylor_francis", "springer", "bloomsbury"],
  journal: ["crossref", "semantic_scholar", "doaj", "proquest", "springer", "jstor", "taylor_francis", "wiley", "scopus", "cambridge", "google_search"],
  thesis: ["openthesis", "oatd", "ndltd", "etd", "institutional_repo", "proquest_dissertations", "ndl", "dissertation_abstracts", "proquest", "google_search"],
  newspaper: ["nyt", "guardian", "bbc", "newsapi", "google_search", "ap", "reuters", "ft", "washington_post"],
  press_release: ["google_books", "prnewswire", "business_wire", "globe", "prweb", "marketwired", "cision", "meltwater", "business_insider", "google_search"],
  report: ["us_gpo", "gov_report", "un", "ilo", "world_bank", "google_books", "worldcat", "oecd", "proquest", "google_search"],
  website: ["duckduckgo", "google_custom", "bing", "google_search"],
  congress: ["us_gpo", "congress_gov", "us_senate", "google_search"],
  senate_report: ["congress_gov", "us_senate", "us_gpo", "google_search"]
};

module.exports = API_CHAINS;
