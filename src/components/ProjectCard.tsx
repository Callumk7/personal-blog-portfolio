interface ProjectCardProps {
    project: ProjectType;
    className?: string;
}

interface ProjectType {
    id: number;
    title: string;
    description?: string;
    date: string;
    tags?: string[];
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <div className={className}>
            <h1>{project.title}</h1>
            <p>{project.date}</p>
        </div>
    );
}
