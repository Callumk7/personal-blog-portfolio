import Image from "next/image";
import { PostFrontmatter } from "@/types";
import Link from "next/link";

export default function CoverPostCard({ post }: { post: PostFrontmatter }) {
	return (
		<div className="flex border-2 border-black flex-col px-2 py-5">
			<p className="text-xs text-secondary">{post.date}</p>
			<div className="flex flex-row space-x-4 pb-2 text-xs text-secondary">
				{post.tags!.map((tag) => (
					<p key={tag}>{tag}</p>
				))}
			</div>
			<h2 className="py-3 font-grotesk text-xl font-medium">{post.title}</h2>
			<p className="pb-2 font-sans">{post.description}</p>
			<Link href={`/blog/${post.slug}`} className="font-sans text-quinary">
				Continue Reading..
			</Link>
		</div>
	);
}
