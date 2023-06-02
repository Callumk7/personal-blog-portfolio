import Link from "next/link";
import "./GradientNavStyle.css";

export default function GradientNav() {
	const items = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Blog", link: "/blog" },
		{ name: "Projects", link: "/projects" },
	];
	return (
		<div className="fixed top-0 mb-8 h-fit w-full">
			<nav className="absolute top-0 z-40 h-full w-full p-4">
				<ul className="flex h-full flex-row items-center justify-end space-x-10">
					{items.map((item) => (
						<ul key={item.name}>
							<Link href={item.link} className="text-zinc-800 hover:text-quinary">
								{item.name}
							</Link>
						</ul>
					))}
				</ul>
			</nav>
			<div className={`relative top-0 h-24 w-full overflow-hidden`}>
				<div className="absolute left-0 top-0 z-30 h-full w-full bg-zinc-100 bg-opacity-50 backdrop-blur-2xl"></div>
				<div className="absolute left-0 top-0 z-10 h-full w-full animate-gradient-fade bg-gradient-to-br from-primary to-secondary"></div>
				<div className="absolute left-0 top-0 z-10 h-full w-full animate-gradient-fade-reverse bg-gradient-to-t from-tertiary to-quinary"></div>
				<div className="blob1 blur-3xl"></div>
				<div className="blob2 blur-3xl"></div>
				<div className="blob3 blur-3xl"></div>
			</div>
		</div>
	);
}
