const path = require('path');

const rootDir = path.resolve(__dirname);

module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: process.env.GITHUB_ACTIONS ? ['lcovonly', 'text'] : ['html', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleFileExtensions: ['json', 'js', 'ts'],
  rootDir,
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': require.resolve('ts-jest'),
  },
  verbose: true,
};
