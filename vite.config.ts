import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': _resolve('components'),
      'typings': _resolve('typings'),
    }
  }
})
