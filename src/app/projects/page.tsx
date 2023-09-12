import { ProjectView } from "@/components/projects/ProjectView";
import { getAllProjectsWithCategory } from "@/util";


export default async function ProjectsPage() {
  const projects = await getAllProjectsWithCategory();
  return (
    <ProjectView projects={projects} />
  );
}
