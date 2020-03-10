import { Configuration, BannerPlugin } from 'webpack'
import { resolve } from 'path'
import WebpackBar from 'webpackbar'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'
import CaseSensitivePathsWebpackPlugin from 'case-sensitive-paths-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'
import ErrorOverlayWebpackPlugin from 'error-overlay-webpack-plugin'

const config: Configuration = {
  mode: 'production',
  entry: resolve(__dirname, '../', 'index.ts'),
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../', 'lib'),
    library: '',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      src: resolve(__dirname, '../', 'src'),
      internal: resolve(__dirname, '../', 'internal'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { cacheDirectory: true },
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
    new ErrorOverlayWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [resolve(__dirname, '../', 'types')],
    }),
    new ForkTsCheckerWebpackPlugin({
      memoryLimit: 1024 * 4,
      tsconfig: resolve(__dirname, 'tsconfig.json'),
    }),
    new HardSourceWebpackPlugin({
      info: { mode: 'none', level: 'warn' },
    }),
    new TerserPlugin(),
  ],
}

export const prodConfig = new SpeedMeasurePlugin().wrap(config)
