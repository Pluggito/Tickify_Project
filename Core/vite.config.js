import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Tickify_Project/",
  server: {
    historyApiFallback: true, // Enables SPA fallback for local development
    port: 3000,
    open: true
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add other large dependencies here
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
