import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
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
