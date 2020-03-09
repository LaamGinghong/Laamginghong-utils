// scripts/typings/index.d.ts
declare module 'speed-measure-webpack-plugin' {
  import { Configuration, Plugin } from 'webpack'

  // 查看官方文档，需要哪些选项就声明哪些选项就行
  // 可以看出 TypeScript 是非常灵活的
  interface SpeedMeasurePluginOptions {
    disable: boolean
    outputFormat:
      | 'json'
      | 'human'
      | 'humanVerbose'
      | ((outputObj: object) => void)
    outputTarget: string | ((outputObj: string) => void)
    pluginNames: object
    granularLoaderData: boolean
  }

  // 继承 Plugin 类, Plugin 类都有 apply 方法
  class SpeedMeasurePlugin extends Plugin {
    constructor(options?: Partial<SpeedMeasurePluginOptions>)
    wrap(webpackConfig: Configuration): Configuration
  }

  export = SpeedMeasurePlugin
}
