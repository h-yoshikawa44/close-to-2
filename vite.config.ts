import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/close-to-2/',
  server: {
    open: true,
  },
  plugins: [react(), tsconfigPaths()],
});
