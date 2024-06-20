/** @type {import('jest').Config} */
const config = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native/.*|react-navigation|@react-navigation/.*))',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};

module.exports = config;
