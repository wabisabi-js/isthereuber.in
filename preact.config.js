export default (config, env, helpers) => {
  config.node.process = 'mock'
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0]
  let babelConfig = rule.options

  babelConfig.plugins.push('babel-plugin-emotion')
}
