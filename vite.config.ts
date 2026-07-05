import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { ViteReactSSGOptions } from 'vite-react-ssg'

const ssgOptions: ViteReactSSGOptions = {
  entry: 'src/main.tsx',
  script: 'async',
}

export default defineConfig({
  plugins: [react()],
  server: {
    open: 'msedge',
  },
  ssgOptions,
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/p5')) {
            return 'p5'
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/@gsap')) {
            return 'gsap'
          }
          if (
            id.includes('node_modules/i18next') ||
            id.includes('node_modules/react-i18next')
          ) {
            return 'i18n'
          }
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react/')
          ) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/dompurify')) {
            return 'dompurify'
          }
        },
      },
    },
  },
})
