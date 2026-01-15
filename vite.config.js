import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/nexon_ai_website/',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['inbred-unbruised-tristen.ngrok-free.dev']
  }
})
