module.exports = {
  rootDir: __dirname,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/tests/jest.babel.transform.js',
    '^.+\\.tsx?$': '<rootDir>/tests/jest.ts.transform.js',
  },
  setupFiles: [],
  testMatch: ['<rootDir>/packages/*/__tests__/**/*spec.@(js|ts)?(x)'],
  collectCoverageFrom: ['packages/*/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
}
