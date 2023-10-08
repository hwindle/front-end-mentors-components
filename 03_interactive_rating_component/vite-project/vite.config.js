import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/front-end-mentors-components/03_interactive_rating_component/vite-project/dist',
  plugins: [react()],
})
