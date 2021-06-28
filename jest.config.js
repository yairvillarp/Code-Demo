/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  coverageProvider: "v8",
  moduleDirectories: [
     "node_modules"
  ],
  testEnvironment: "node",
  preset: '@shelf/jest-mongodb'
};
