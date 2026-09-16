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
        routeRules: {
          "/assets/**": {
            headers: { "cache-control": "public, max-age=31536000, immutable" },
          },
          "/fonts/**": {
            headers: { "cache-control": "public, max-age=31536000, immutable" },
          },
        },
      }),
    ],
    build: {
      target: "esnext",
      cssMinify: true,
    },
  },
});
