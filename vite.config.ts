import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888,
    proxy: {
      "/auth": "http://localhost:8880/",
    },
  },
});
