const STYLE_RULES = {
  italic: (text) => `<span style="font-style: italic;">${text}</span>`,
  bold: (text) => `<span style="font-weight: bold;">${text}</span>`,
  normal: (text) => `<span style="font-style: normal;">${text}</span>`
};

module.exports = STYLE_RULES;
