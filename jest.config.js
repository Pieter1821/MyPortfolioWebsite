module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
