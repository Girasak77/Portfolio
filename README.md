# Portfolio Website

เว็บ Portfolio แบบ Static สร้างด้วย Astro และ Tailwind CSS

## โครงสร้างภาษา

```text
src/
├── components/
│   └── ProjectCard.astro      # การ์ดผลงานที่ใช้ซ้ำ
├── layouts/
│   └── BaseLayout.astro       # เมนู ปุ่มเปลี่ยนภาษา และ footer
├── pages/
│   ├── index.astro            # อังกฤษ: หน้าแรก       /
│   ├── about.astro            # อังกฤษ: ประวัติ       /about
│   ├── portfolio.astro        # อังกฤษ: ผลงาน         /portfolio
│   ├── blog.astro             # อังกฤษ: บทความ        /blog
│   ├── contact.astro          # อังกฤษ: ติดต่อ        /contact
│   └── th/
│       ├── index.astro        # ไทย: หน้าแรก           /th/
│       ├── about.astro        # ไทย: ประวัติ           /th/about
│       ├── portfolio.astro    # ไทย: ผลงาน             /th/portfolio
│       ├── blog.astro         # ไทย: บทความ            /th/blog
│       └── contact.astro      # ไทย: ติดต่อ            /th/contact
└── styles/
    └── global.css             # สี ฟอนต์ และ style กลาง
```

## การเปลี่ยนภาษา

ปุ่ม `ไทย` และ `EN` อยู่ใน `src/layouts/BaseLayout.astro` เป็นลิงก์ธรรมดา
จึงไม่มี JavaScript และแต่ละภาษามีหน้า HTML static ของตัวเอง

## เริ่มใช้งาน

```powershell
npm install
npm run dev
```
