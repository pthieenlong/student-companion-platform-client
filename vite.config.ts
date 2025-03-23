import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import dotenv from 'dotenv';
// https://vite.dev/config/

dotenv.config({ path: `.env`})
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: Number(process.env.VITE_APP_PORT)
  }
})
