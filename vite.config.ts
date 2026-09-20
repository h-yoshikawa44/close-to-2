import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/close-to-2/',
  server: {
    open: true,
  },
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
});
