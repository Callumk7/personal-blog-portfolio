import Image from "next/image";
import { PostFrontmatter } from "@/types";
import Link from "next/link";

export default function CoverPostCard({ post }: { post: PostFrontmatter }) {
	return (
		<Link href={`/blog/${post.slug}`} className="flex flex-col border border-black px-2 py-5">
			<h2 className="py-3 font-syne text-xl font-bold">{post.title}</h2>
			<p className="pb-2 font-sans">{post.description}</p>
		</Link>
	);
}
