import { skills } from "@/data";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center py-10">
        <div className="w-28 h-28 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">
          👩‍💻
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Nazwa Chinaga
        </h1>
        <p className="text-blue-600 font-medium mb-4">
          Frontend Developer & UI/UX Enthusiast
        </p>
        <p className="text-gray-500 max-w-xl mx-auto">
          Mahasiswa yang passionate di bidang web development dan UI/UX design.
          Suka belajar hal baru dan membuat aplikasi yang bermanfaat!
        </p>
      </section>

      {/* About Me */}
      <section className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">About Me</h2>
        <div className="space-y-3 text-gray-600 leading-relaxed">
          <p>
            Halo! Saya Nazwa Sri Febiani Sinaga, seorang mahasiswa yang sedang mendalami dunia
            web development. Perjalanan saya dimulai dari belajar HTML dan CSS
            dasar, hingga sekarang sudah bisa membuat aplikasi dengan Next.js
            dan TypeScript.
          </p>
          <p>
            Selain coding, saya juga tertarik dengan UI/UX design. Saya percaya
            bahwa tampilan yang baik dan pengalaman pengguna yang menyenangkan
            sama pentingnya dengan kode yang bersih.
          </p>
          <p>
            Saat ini saya sedang aktif belajar dan mengerjakan berbagai project
            untuk mengembangkan skill saya. Mari berkolaborasi! 🚀
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-blue-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }} 
                />
              </div>
              <span className="text-xs text-gray-400 mt-1 block">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Let's Connect! 👋
        </h2>
        <p className="text-gray-500 mb-6">
          Punya project seru atau mau ngobrol soal tech? Hubungi aku!
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/naxrikk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="mailto:sinaganazwa32@gmail.com"
            className="px-5 py-2 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 transition-colors"
          >
            Email Aku
          </a>
        </div>
      </section>
    </div>
  );
}