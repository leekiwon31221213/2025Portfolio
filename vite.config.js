import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig(({ command }) => ({
  plugins: [react()],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css', '.png', '.jpg', '.jpeg', '.svg'],
    alias: {
      '/assets': path.resolve(__dirname, 'src/assets'),
    },
  },

  css: {
    modules: {
      generateScopedName: command === 'build' ? '_[hash:base64:7]' : '[local]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "/assets/scss/common/variable.scss" as *;
         @use "/assets/scss/mixin/glass_btn.scss" as *;
        `,
      },
    },
  },
}))
