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
          "/**": {
            headers: {
              "cache-control": "no-cache, no-store, must-revalidate",
              pragma: "no-cache",
              expires: "0",
            },
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
