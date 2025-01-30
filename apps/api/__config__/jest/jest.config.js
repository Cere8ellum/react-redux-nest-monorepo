// const { pathsToModuleNameMapper } = require("ts-jest/utils");
// const { compilerOptions } = require("./tsconfig");
const path = require("path");

module.exports = {
  roots: ["../../src"],
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/filesMock.js",
    "^@monorepo/constants/(.*)$": path.resolve(
      __dirname,
      "../../../../packages/src/constants/$1"
    ),
    "^@monorepo/utils/(.*)$": path.resolve(
      __dirname,
      "../../../../packages/src/utils/$1"
    ),
  },
};
