const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// vue.config.js
// 注意请求接口的时候不要加 baseURL 不然配置会失效
module.exports = {
  devServer: {
    proxy: {
        '/': {
            target: 'http://127.0.0.1:3000',    // api接口基础路径
            changeOrigin: true,       
            ws:false          // 是否支持跨域
        }
    }
  }
}

module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
}

