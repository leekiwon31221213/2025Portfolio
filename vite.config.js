import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import path from 'path'
export default defineConfig({
  plugins: [vueJsx(), svgLoader()],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css', '.png', '.jpg', '.jpeg', '.svg'],
    alias: {
      '/assets': path.resolve(__dirname, 'src/assets'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "/assets/scss/common/variable.scss" as *;
         @use "/assets/scss/mixin/glass_btn.scss" as *;
        `,
      },
    },
  },
})
