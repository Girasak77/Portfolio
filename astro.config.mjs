import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ตั้งค่า Astro ให้ใช้ Tailwind ผ่าน Vite
export default defineConfig({
  root: process.cwd(),
  // ตั้งค่านี้เพื่อให้ลิงก์และไฟล์ static ทำงานเมื่อ deploy ที่ GitHub Pages
  site: "https://girasak77.github.io",
  base: "/Portfolio/",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      preserveSymlinks: true,
    },
    optimizeDeps: {
      disabled: true,
      esbuildOptions: {
        preserveSymlinks: true,
      },
    },
  },
});
