import Link from "next/link";
import { projects, blogPosts, skills } from "@/data";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="py-16 text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
          👩‍💻
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hi, I&apos;m <span className="text-blue-700">Nazwa Chinaga</span> 👋
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
          Frontend Developer & UI/UX Enthusiast. Suka bikin hal-hal yang keren di web!
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/portfolio" className="px-6 py-3 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition-colors">
            View Portfolio
          </Link>
          <Link href="/about" className="px-6 py-3 border border-blue-700 text-blue-700 rounded-xl font-medium hover:bg-blue-50 transition-colors">
            About me
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-blue-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Projects</h2>
          <Link href="/portfolio" className="text-sm text-blue-600 hover:underline">Lihat semua →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(0, 2).map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Posts</h2>
          <Link href="/blog" className="text-sm text-blue-600 hover:underline">Lihat semua →</Link>
        </div>
        <div className="grid gap-4">
          {blogPosts.slice(0, 2).map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all">
              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full mb-3 inline-block">{post.category}</span>
              <h3 className="font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.excerpt}</p>
              <p className="text-xs text-gray-400 mt-2">📅 {post.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}