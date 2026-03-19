import { Project, BlogPost, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Simple Blog App",
    description: "Aplikasi blog dengan fitur bookmark menggunakan Next.js dan TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/naxrikk/simple-blog",
  },
  {
    id: 2,
    title: "Wokwi IoT Project",
    description: "Project IoT simulasi menggunakan Wokwi simulator.",
    tech: ["Arduino", "C++", "IoT"],
    github: "https://github.com/naxrikk",
  },
  {
    id: 3,
    title: "Web Design UI/UX",
    description: "Desain antarmuka web yang modern dan responsif.",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    github: "https://github.com/naxrikk",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Perjalanan Belajar Web Development",
    excerpt: "Cerita seru belajar coding dari nol hingga bisa membuat aplikasi web.",
    content: "Belajar web development dari nol bukanlah hal yang mudah, tapi juga bukan hal yang mustahil. Perjalanan ini dimulai dari memahami dasar-dasar HTML untuk membangun struktur halaman, lalu berlanjut ke CSS untuk mempercantik tampilan, hingga JavaScript yang membuat website menjadi interaktif dan dinamis. Seiring berjalannya waktu, tantangan semakin besar ketika mulai masuk ke dunia framework modern seperti React dan Next.js. Ada banyak momen frustasi, error yang membingungkan, dan konsep yang sulit dipahami, namun semua itu justru menjadi bagian paling berharga dari proses belajar. Artikel ini menceritakan secara jujur bagaimana rasanya berjuang memahami setiap konsep, strategi belajar yang efektif, serta pelajaran penting yang didapat selama perjalanan menjadi seorang web developer.",
    date: "2024-09-19",
    category: "Pengalaman",
  },
  {
    id: 2,
    title: "Apa itu TypeScript?",
    excerpt: "Pengenalan TypeScript dan kenapa kamu harus mulai belajar sekarang.",
    content: "Jika kamu sudah cukup lama di dunia JavaScript, pasti pernah mengalami bug yang sulit dilacak hanya karena tipe data yang tidak sesuai. Di sinilah TypeScript hadir sebagai jawaban. TypeScript adalah superset dari JavaScript yang menambahkan fitur static typing, artinya kamu bisa mendefinisikan tipe data secara eksplisit sehingga kesalahan bisa terdeteksi lebih awal bahkan sebelum kode dijalankan. Dengan TypeScript, kode menjadi lebih terstruktur, lebih mudah di-maintain, dan jauh lebih aman terutama dalam proyek berskala besar. Artikel ini akan membahas secara mendalam apa itu TypeScript, apa perbedaannya dengan JavaScript biasa, bagaimana cara menggunakannya dalam proyek nyata, serta alasan mengapa hampir semua perusahaan teknologi besar kini beralih dan mengadopsi TypeScript sebagai standar penulisan kode mereka.",
    date: "2025-03-15",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "Tips Belajar UI/UX Design",
    excerpt: "Kumpulan tips dan resource untuk belajar UI/UX design dari nol.",
    content: "Di era digital yang semakin kompetitif ini, sebuah produk tidak cukup hanya berfungsi dengan baik, ia juga harus terasa menyenangkan dan mudah digunakan oleh penggunanya. Itulah inti dari UI/UX design. UI (User Interface) berfokus pada tampilan visual seperti warna, tipografi, dan tata letak, sementara UX (User Experience) berfokus pada bagaimana pengguna berinteraksi dan merasakan produk secara keseluruhan. Belajar UI/UX design dari nol memang bisa terasa overwhelming karena banyaknya tools, teori, dan resource yang tersedia. Artikel ini hadir untuk memberikan panduan yang jelas dan terstruktur. Mulai dari rekomendasi tools terbaik seperti Figma, prinsip-prinsip desain yang wajib dipahami, hingga kumpulan resource gratis yang bisa langsung kamu gunakan untuk mulai berlatih dan membangun portofolio desainmu dari nol.",
    date: "2025-08-25",
    category: "Design",
  },
];

export const skills: Skill[] = [
  { name: "HTML/CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "React/Next.js", level: 70, category: "Frontend" },
  { name: "TypeScript", level: 65, category: "Frontend" },
  { name: "UI/UX Design", level: 75, category: "Design" },
  { name: "Figma", level: 70, category: "Design" },
];