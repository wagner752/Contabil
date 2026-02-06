import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 👇 Em produção usa /Contabil/ para GitHub Pages, em dev usa /
  base: mode === "production" ? "/Contabil/" : "/",

  // 👇 Isso vai fazer o erro aparecer com arquivo/linha do seu código (tsx),
  // em vez de só index-xxxxx.js:40
  build: {
    sourcemap: true,
    outDir: "dist",
    assetsDir: "assets",
  },

  server: {
    host: true, // pode ser "*" também, mas "true" é mais padrão
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
