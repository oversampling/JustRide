module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.json', '*.md'], // Add more file extensions if needed
      options: {
        parser: 'json', // Specify the parser for JSON files
      },
    },
    {
      files: ['*.tsx'], // Include TSX files
      options: {
        parser: 'typescript', // Specify the parser for TSX files
      },
    },
  ],
};
