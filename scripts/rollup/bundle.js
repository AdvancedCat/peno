const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const ROOT = join(__dirname, '../../packages');

const cwd = process.cwd();
const { rollup: rollupConfig = {} } = require(join(cwd, 'package.json'));

const moduleGlobals = readdirSync(ROOT)
    .filter((path) => lstatSync(join(ROOT, path)).isDirectory())
    .reduce((acc, pkgName) => {
        const pkgJSON = require(join(ROOT, pkgName, 'package.json'));

        if (pkgJSON.rollup && pkgJSON.rollup.moduleName) {
            acc[pkgJSON.name] = pkgJSON.rollup.moduleName;
        }

        return acc;
    }, {});

module.exports = function (options) {
    const filename = `${options.name}${options.ext}`;

    const bundleOptions = {
        output: {
            file: `dist/${filename}`,
            format: options.format,
            globals: Object.assign(moduleGlobals, rollupConfig.moduleGlobals),
            name: rollupConfig.moduleName,
            indent: true,
            extend: true,
            sourcemap: false,
        },
    };

    if (options.format === 'cjs') {
        bundleOptions.output.exports = 'named';
    }

    return ({ write }) => write(bundleOptions);
};
