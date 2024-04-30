import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  ,
  server:{
    proxy:{
      '/api':{
        target:'http://120.53.102.235:8080/',//产生跨域的地址
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
        // pathRewrite: {
        //   '^/api': ''
        // }
      },
      '/wsapi':{
        target:'ws://120.53.102.235:8080/',//产生跨域的地址
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 5000
  }
})
