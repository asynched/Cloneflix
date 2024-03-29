import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@lib': path.resolve(__dirname, 'src', 'lib'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@helpers': path.resolve(__dirname, 'src', 'helpers'),
    },
  },
})
