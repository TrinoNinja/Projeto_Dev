const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
  /*,
  configureWebpack: {
    resolve: {
      fallback: {
        net: false,
        tls: false,
        fs: false
      }
    }
  } 
  */ 
})
