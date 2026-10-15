import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Korean-Smlie-Snack/',
  plugins: [
    tailwindcss(),
  ],
});