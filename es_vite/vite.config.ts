import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 8081,
    open: true,
    cors: true,
    https: false,
    strictPort: true,
    hmr: true,
    //代理
    proxy: {
      '/api2':{
        target: 'https://v1.hitokoto.cn/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api2/, '')
      },
      '/api': {
        target: 'https://localhost:10000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
