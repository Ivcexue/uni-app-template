import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  envDir: resolve(__dirname, 'env'),
  plugins: [uni(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 因为uni.scss可以全局使用，这里根据自己的需求调整
        additionalData: '@import "./src/styles/global.scss";'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
    // proxy: {
    //   '/api': {
    //     target: 'http://local.fzznkj.com:16006',
    //     changeOrigin: true,
    //     // 路径重写，去掉/dev
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
  // build: {
  //   // 禁用 gzip 压缩大小报告，以提升构建性能
  //   brotliSize: false,
  //   /** 配置h5打包js,css,img分别在不同文件夹start */
  //   assetsDir: 'static/img/',
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: 'static/js/[name]-[hash].js',
  //       entryFileNames: 'static/js/[name]-[hash].js',
  //       assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
  //     }
  //   }
  //   /** 配置h5打包js,css,img分别在不同文件夹end */
  // }
})
