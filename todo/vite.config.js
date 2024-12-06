import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/class2/todo/",
  build: {
    outDir: '../dist.todo',
    emptyOutDir: false,
  },
});