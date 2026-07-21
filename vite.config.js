import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A small Vite setup is all this static educational site needs.
export default defineConfig({
  plugins: [react()],
})
