import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    target: "es2020",
    lib: {
      entry: "src/main.ts",
      formats: ["es", "cjs"]
    }
  }
})
