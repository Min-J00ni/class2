import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/class2/TODO2/",
  build: {
    outDir: '../dist/TODO2',
    emptyOutDir: false,
  },
})
