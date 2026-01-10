import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/nexon_ai_website/',
  plugins: [react()],
  server: {
    allowedHosts: ['inbred-unbruised-tristen.ngrok-free.dev']
  }
})
