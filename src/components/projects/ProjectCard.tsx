import { ProjectWithCategory } from "@/types";
import Link from "next/link";
import Header from "../ui/Header";

export function ProjectCard({ project }: { project: ProjectWithCategory }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="flex flex-col gap-y-4 border-accent border-t px-2 py-5 transition ease-in hover:bg-highlight"
    >
      <Header h={2}>{project.title}</Header>
      <p className="font-mono text-muted">
        {project.createdAt.toDateString().toUpperCase()}
      </p>
      <p>{project.description}</p>
    </Link>
  );
}
