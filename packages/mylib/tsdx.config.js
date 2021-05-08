// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const replace = require('@rollup/plugin-replace');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    return {
      ...config,
      // output: {
      //   ...config.output,
      //   inlineDynamicImports: true,
      //   file: undefined,
      //   dir: 'dist',
      // }
      plugins: config.plugins = config.plugins.map(p =>
        p.name === 'replace'
          ? replace({
              'process.env.NODE_ENV': JSON.stringify(options.env),
              preventAssignment: true,
            })
          : p
      ),
    }; // always return a config.
  },
};