import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        dir: 'dist', // Output directory
        entryFileNames: '[name].js', // Entry point filename pattern
      },
    },
  },
});
