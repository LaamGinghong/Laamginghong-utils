import { Configuration, BannerPlugin } from 'webpack'
import { resolve } from 'path'
import WebpackBar from 'webpackbar'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'
import CaseSensitivePathsWebpackPlugin from 'case-sensitive-paths-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'

const config: Configuration = {
  mode: 'production',
  entry: resolve(__dirname, '../', 'index.ts'),
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../', 'lib'),
    library: '',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          experimentalFileCaching: true,
          configFile: resolve(__dirname, '../', 'tsconfig.json'),
        },
      },
    ],
  },
  plugins: [
    new WebpackBar({ name: 'Laamginghong-utils', color: '#61dafb' }),
    new BannerPlugin({
      raw: true,
      banner: `/** @preserve Powered by LaamGinghong-utils (https://github.com/LaamGinghong/Laamginghong-utils.git) */`,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBuildNotifierPlugin(),
    new CaseSensitivePathsWebpackPlugin(),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: resolve(__dirname, '../'),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [resolve(__dirname, '../', 'types')],
    }),
    new TerserPlugin(),
  ],
}

export const prodConfig = new SpeedMeasurePlugin().wrap(config)
