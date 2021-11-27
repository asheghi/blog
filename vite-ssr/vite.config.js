import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

const isProduction = process.env.NODE_ENV === 'production'
const banseUrl = "blog"
const base = isProduction ? '/dist/client/' : `/${banseUrl}`

export default {
  plugins: [vue(), ssr()],
  base,
}
