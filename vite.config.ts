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
    // outDir: 'docs', // 官网
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue3-glassmorphism',
      formats: ['es', 'umd']
    },
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
