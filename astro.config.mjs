import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ตั้งค่า Astro ให้ใช้ Tailwind ผ่าน Vite
export default defineConfig({
  site: 'https://girasak77.github.io',
  base: '/Portfolio/',
  vite: { plugins: [tailwindcss()] },
});
