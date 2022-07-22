/*
 * @Author: Mx
 * @Date: 2022-07-22 10:52:32
 * @Description: 
 */

// 环境变量
const ENV = process.env.NODE_ENV 

module.exports = {
    publicPath: ENV === 'production' ? '/qiankun/':'/', 
    devServer:{
      hot: true, // 热加载
      open: false, // 自动打开浏览器
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    },
    chainWebpack: config => {
      config.plugin('html')
        .tap((args) => {
          args[0].title = 'qiankun-example'
          return args
        })
    } 
}
  
