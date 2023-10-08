import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://splendid-swan-2aea5a.netlify.app/03_interactive_rating_component/vite-project/dist/',
  plugins: [react()],
})
