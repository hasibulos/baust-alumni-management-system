import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.FIGMA ? Number(process.env.PORT) : 3000,
    host: process.env.FIGMA ? (process.env.FIGMA_DEV_SERVER_HOST || "0.0.0.0") : "0.0.0.0",
    strictPort: Boolean(process.env.FIGMA),
    cors: true,
    allowedHosts: true, // Allow all hosts including trycloudflare.com tunnels
  },
  preview: {
    port: 3000,
    host: "0.0.0.0",
    cors: true,
    allowedHosts: true,
  }
})
