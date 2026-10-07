import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pretPersonnel: resolve(__dirname, "pret-personnel-en-ligne/index.html"),
        pret1000: resolve(__dirname, "pret-1000/index.html"),
        privacy: resolve(__dirname, "politique-de-confidentialite/index.html"),
        merci: resolve(__dirname, "merci/index.html"),
        notFound: resolve(__dirname, "404/index.html"),
      },
    },
  },
});
