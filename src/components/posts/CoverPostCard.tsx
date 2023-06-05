import Image from "next/image";
import { PostFrontmatter } from "@/types";
import Link from "next/link";

export default function CoverPostCard({ post }: { post: PostFrontmatter }) {
	return (
		<div className="flex flex-col px-2 py-5">
			<p className="text-xs text-secondary">{post.date}</p>
			<div className="flex flex-row space-x-4 pb-2 text-xs text-secondary">
				{post.tags!.map((tag) => (
					<p key={tag}>{tag}</p>
				))}
			</div>
			<div className="relative max-h-96 overflow-hidden rounded-md">
				<div className="absolute -right-16  bottom-7 z-20 h-full w-2/3 rounded-full bg-quinary opacity-40 blur-2xl"></div>
				<div className="absolute z-10 h-full w-full bg-primary opacity-50  backdrop-saturate-50"></div>
				<Image
					src={post.coverImage!}
					alt="Post cover image"
					width={5000}
					height={4000}
					className="bg-cover bg-center grayscale"
				/>
			</div>
			<h2 className="py-3 font-grotesk text-xl font-medium">{post.title}</h2>
			<p className="pb-2 font-sans">{post.description}</p>
			<Link href={`/blog/${post.slug}`} className="font-sans text-quinary">
				Continue Reading..
			</Link>
		</div>
	);
}
