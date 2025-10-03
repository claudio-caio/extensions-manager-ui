import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Permite acceso desde otras PCs en la red
    port: 5173, // Mantiene el puerto que usas
  }
})
