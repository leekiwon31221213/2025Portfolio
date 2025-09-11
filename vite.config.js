import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), svgLoader(), vueDevTools()],

  resolve: {
    extensions: ['.js', '.vue', '.scss', '.css', '.png', '.jpg', '.jpeg', '.svg'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/common/variable.scss" as *;
          @use "@/assets/scss/mixin/glass_btn.scss" as *;
        `,
      },
    },
  },
})
