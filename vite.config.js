import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dsv from '@rollup/plugin-dsv'
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // vue(),
    // dsv()
  ],
})
