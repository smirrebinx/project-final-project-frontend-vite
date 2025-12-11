import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173, // Explicitly set port in case there's a conflict
    open: true, // Automatically open the app in the browser when the server starts
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'reducers': path.resolve(__dirname, './src/reducers')
    }
  }
})
