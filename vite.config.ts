import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Esto configura el alias @ a la carpeta src
    },
  },
  server: {
    port: 5173, // Puedes cambiar el puerto si lo prefieres
  },
});
