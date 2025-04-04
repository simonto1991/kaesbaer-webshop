import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kaesbaer-webshop/',  // Passe dies an den Repository-Namen an
  server: {
    host: true,
    port: 3000
  }
})
