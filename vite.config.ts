import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: [
      {
        find: /^(@mui\/[\w-]+)/,
        replacement: path.resolve(__dirname, "node_modules/$1"),
      },
    ],
  }
})
