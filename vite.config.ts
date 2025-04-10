import { defineConfig } from "vite";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  build: {
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            drop_debugger: true, // 可选：移除 debugger
            drop_console: true, // 可选：移除 console.log
          },
        }),
      ],
    },
    lib: {
      entry: "src/index.js",
      name: "Uploader",
      formats: ["es", "umd", "iife", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
