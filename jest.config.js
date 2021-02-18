module.exports = {
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['client/components/**/*.js', 'client/utils/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/jest.setup.js', 'jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>/jest-after-env.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      '<rootDir>/fileMock.js',
  },
};
