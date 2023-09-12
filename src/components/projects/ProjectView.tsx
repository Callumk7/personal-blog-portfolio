import { ProjectWithCategory } from "@/types";
import { ProjectCard } from "./ProjectCard";

export function ProjectView({ projects }: { projects: ProjectWithCategory[] }) {
  return (
    <div className="flex flex-col justify-items-stretch">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
