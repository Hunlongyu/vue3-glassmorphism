import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createTypes from './script/createType'
const path = require('path')

export default defineConfig({
  plugins: [vue({
    style: {
      filename: 'vue3-glassmorphism'
    }
  }), createTypes()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue3-glassmorphism',
      formats: ['es', 'umd']
    },
    // outDir: 'docs',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: "Vue"
        },
        exports: 'named'
      }
    }
  }
})
