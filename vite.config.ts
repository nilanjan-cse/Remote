import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'remoteapp',
      filename:"remoteHeader.js",
      exposes: {
        "./RemoteApp": "./src/App.tsx"
      },
      shared: ["react"]
      
    })
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
})
