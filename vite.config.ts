import { defineConfig } from 'vite'
import VueComponents from 'vite-plugin-components'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), VueComponents()],
})
