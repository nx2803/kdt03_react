import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind(),],
  server: {
    proxy: {
      '/api': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) =>{
            proxyReq.setHeader('User-agent', 'PostmanRuntime/7.49.0');
          });
        }
      },
      '/kobis': {
        target: 'http://kobis.or.kr/',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/kobis/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) =>{
            proxyReq.setHeader('User-agent', 'PostmanRuntime/7.49.0');
          });
        }
      }
    }
  }
})
