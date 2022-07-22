/*
 * @Author: Mx
 * @Date: 2022-07-01 23:25:47
 * @Description: 
 */
const { name } = require('./package.json')
// 环境变量
const ENV = process.env.NODE_ENV 

module.exports = {
    publicPath: ENV === 'production' ? '/qiankun/':'/', 
    devServer: {
        port: 10000,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
          library: `${name}-[name]`,
          libraryTarget: 'umd', // 把微应用打包成 umd 库格式
          jsonpFunction: `webpackJsonp_${name}`,
        },
      },
}
