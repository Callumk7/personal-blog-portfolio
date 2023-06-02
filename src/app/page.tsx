import { getAllPostFrontmatter } from "@/util/posts";

export default function Home() {
	const posts = getAllPostFrontmatter();

	return (
		<section>
			<div className="relative h-full w-full">
				<div className="fixed top-0 -z-10 h-screen w-full bg-zinc-100 bg-opacity-30 backdrop-blur-2xl">
					Glass
				</div>
				<div className="relative -left-28 -z-20 h-screen w-1/2 rounded-full bg-primary">
					Glow
				</div>
			</div>
		</section>
	);
}
