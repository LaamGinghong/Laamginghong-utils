const envPreset = [
  '@babel/preset-env',
  {
    useBuiltIns: 'usage',
    corejs: 3,
  },
]

module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-typescript', envPreset],
    plugins: ['@babel/plugin-transform-runtime'],
  }
}