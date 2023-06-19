import { PostFrontmatter } from "@/types";
import Link from "next/link";
import Tag from "../shared/tags";

export default function PostCard({ post }: { post: PostFrontmatter }) {
	return (
		<Link href={`/blog/${post.slug}`} className="flex flex-col border-2 border-black px-2 py-5">
			<p className="text-xs">{post.date}</p>
			<div className="flex flex-row space-x-4 text-xs">
				{post.tags!.map((tag) => (
					<Tag tag={tag} colour={1} key={tag} />
				))}
			</div>
			<h2 className="py-3 font-syne text-xl font-bold">{post.title}</h2>
			<p className="pb-2 font-sans">{post.description}</p>
		</Link>
	);
}
