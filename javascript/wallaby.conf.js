module.exports = function () {
  return {
    env: {
      runner: 'node',
      type: 'node',
    },

    files: [
      'babel.config.js',
      'src/common/*.ts',
      'src/problems/*.js',
    ],
    
    tests: [
      'src/__tests__/**/*.ts',
    ],

    testFramework: 'jest',
  };
}
