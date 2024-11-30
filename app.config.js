import { defineConfig } from '@tanstack/start/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    compatibilityDate: '2024-11-27',
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      tsconfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})
