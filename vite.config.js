import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/NckCode.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': '/src',
      '@public': '/public',
    },
  },
})
