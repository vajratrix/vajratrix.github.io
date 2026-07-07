import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vajratrix.github.io is a user/org GitHub Pages repo, so it's served from the
// domain root — base stays '/' (unlike project-page repos which need '/repo-name/').
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5432,
    strictPort: true, // fail loudly instead of silently picking another port if 5432 is busy
    allowedHosts: ['.ngrok-free.dev'], // lets ngrok tunnels through Vite's host-check security feature
  },
  preview: {
    port: 5433,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  },
})