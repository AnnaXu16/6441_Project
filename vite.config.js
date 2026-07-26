import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production assets use the GitHub repository path; local development stays at /.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/6441_Project/' : '/',
  plugins: [react()],
}))
