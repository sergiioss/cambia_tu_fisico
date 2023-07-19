import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression()
  ],
  assetsInclude:['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
  base:'/cambia_tu_fisico/'
})
