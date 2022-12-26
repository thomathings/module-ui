const { readFileSync } = require("fs");

const swcConfig = JSON.parse(readFileSync(`${__dirname}/.swcrc`, "utf-8"));

/** @type {import('jest').Config} */
const config = {
  rootDir: ".",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.stories.tsx",
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  "moduleNameMapper": {
    "\\.(css|less|scss|sss|styl)$": "jest-css-modules"
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", { ...swcConfig }],
  },
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
};

module.exports = config;