import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  nitro: false, // Disable default Cloudflare configuration
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      nitro({
        preset: "vercel", // Build for Vercel Serverless
      }),
    ],
  },
});
