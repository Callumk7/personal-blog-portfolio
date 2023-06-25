import { PostFrontmatter } from "@/types";
import { Post } from "@prisma/client";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
	return (
		<Link
			href={`/blog/posts/${post.slug}`}
			className="flex flex-col border border-black from-primary to-neutral-200 px-2 py-5 transition ease-in hover:bg-primary"
		>
			<h2 className="py-3 font-syne text-xl font-bold">{post.title}</h2>
			<p className="font-figtree pb-2 text-xs">{post.description}</p>
		</Link>
	);
}
