import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Tickify_Project/",
  server: {
    historyApiFallback: true, // Enables SPA fallback for local development
  },
  build: {
    outDir: "dist",
  },
})
