const { resolve, join } = require('path');
const alias = require('@rollup/plugin-alias');
const ROOT = join(__dirname, '../../../');

module.exports = alias({
  resolve: ['.js'],
  entries: [
    { find: 'peno', replacement: resolve(ROOT, 'packages/peno/dist/index.esm.js') },
    { find: 'peno-create-element', replacement: resolve(ROOT, 'packages/peno-create-element/dist/index.esm.js') },
  ]
});