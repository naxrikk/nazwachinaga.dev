import { projects } from "@/data";
import ProjectCard from "@/components/ProjectCard";

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Portfolio</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Kumpulan project yang pernah aku buat. Dari web app hingga UI/UX
          design!
        </p>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}