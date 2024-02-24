import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { resolve } from "node:path";

const pathResolve = (dir: string) => resolve(__dirname, ".", dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: "esbuild",
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
  },
});
