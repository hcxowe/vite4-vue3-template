import { defineConfig, ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock' // mock

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    plugins: [
      vue(),
      viteMockServe({
        mockPath: './src/mock',
        enable: command === 'serve'
      })
    ]
  })
}