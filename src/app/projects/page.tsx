import ProjectCard from "@/components/ProjectCard";

const projects = [
	{
		id: 1,
		title: "tasks app",
		date: "23-04-23",
		tags: ["react", "node", "express", "react router"],
	},
	{
		id: 2,
		title: "ecommerce website",
		date: "12-05-23",
		tags: ["react", "node", "express", "mongoDB"],
	},
	{
		id: 3,
		title: "blog website",
		date: "08-04-23",
		tags: ["react", "next.js", "styled components", "contentful"],
	},
	{
		id: 4,
		title: "weather app",
		date: "30-05-23",
		tags: ["react native", "expo", "openweathermap API"],
	},
];

export default function Home() {
	return (
		<div className="grid grid-cols-3 p-3">
			{projects.map((project) => {
				return <ProjectCard className="bg-gray-300" project={project} key={project.id} />;
			})}
		</div>
	);
}
