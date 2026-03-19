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
    content: "Belajar web development adalah perjalanan yang menyenangkan. Dimulai dari HTML, CSS, JavaScript, hingga React dan Next.js...",
    date: "2024-03-19",
    category: "Pengalaman",
  },
  {
    id: 2,
    title: "Apa itu TypeScript?",
    excerpt: "Pengenalan TypeScript dan kenapa kamu harus mulai belajar sekarang.",
    content: "TypeScript adalah superset dari JavaScript yang menambahkan static typing. Dengan TypeScript, kode kita jadi lebih aman dan mudah di-maintain...",
    date: "2024-03-15",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "Tips Belajar UI/UX Design",
    excerpt: "Kumpulan tips dan resource untuk belajar UI/UX design dari nol.",
    content: "UI/UX design adalah skill yang sangat berharga di era digital ini. Berikut tips untuk memulai belajar UI/UX design...",
    date: "2024-03-10",
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