import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['sajulendingpage-production.up.railway.app', 'inblabhomepage-production-c4cd.up.railway.app'],
  },
})
