module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'dom-size': ['error', { maxNumericValue: 3000 }],
        'offscreen-images': 'off',
        'color-contrast': 'off',
        'tap-targets': 'off',
      },
    },
  },
};
