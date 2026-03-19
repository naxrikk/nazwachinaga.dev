import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-medium"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {/* Added <a here */}
        <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
            GitHub
        </a>

        {project.demo && (
            /* Added <a here */
            <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
            Live Demo
            </a>
            )}
            </div>
        </div>
        );
        }