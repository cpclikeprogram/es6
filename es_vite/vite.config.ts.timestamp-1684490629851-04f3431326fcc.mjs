// vite.config.ts
import { defineConfig } from "file:///C:/Users/xuanit/Desktop/es6/es_vite/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/xuanit/Desktop/es6/es_vite/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 8081,
    open: true,
    cors: true,
    https: false,
    strictPort: true,
    hmr: true,
    //代理
    proxy: {
      "/api2": {
        target: "https://v1.hitokoto.cn/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, "")
      },
      "/api": {
        target: "https://localhost:10000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx4dWFuaXRcXFxcRGVza3RvcFxcXFxlczZcXFxcZXNfdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceHVhbml0XFxcXERlc2t0b3BcXFxcZXM2XFxcXGVzX3ZpdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3h1YW5pdC9EZXNrdG9wL2VzNi9lc192aXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzEyNy4wLjAuMScsXG4gICAgcG9ydDogODA4MSxcbiAgICBvcGVuOiB0cnVlLFxuICAgIGNvcnM6IHRydWUsXG4gICAgaHR0cHM6IGZhbHNlLFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgaG1yOiB0cnVlLFxuICAgIC8vXHU0RUUzXHU3NDA2XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpMic6e1xuICAgICAgICB0YXJnZXQ6ICdodHRwczovL3YxLmhpdG9rb3RvLmNuLycsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkyLywgJycpXG4gICAgICB9LFxuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vbG9jYWxob3N0OjEwMDAwLycsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVTLFNBQVMsb0JBQW9CO0FBQ3BVLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osS0FBSztBQUFBO0FBQUEsSUFFTCxPQUFPO0FBQUEsTUFDTCxTQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLFVBQVEsS0FBSyxRQUFRLFdBQVcsRUFBRTtBQUFBLE1BQzdDO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLFVBQVEsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQzVDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
