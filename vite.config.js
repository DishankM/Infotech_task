import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import Checker, { checker } from 'vite-plugin-checker';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
     tsconfigPaths(),
     Checker({ typescript: true })
  ],

})
