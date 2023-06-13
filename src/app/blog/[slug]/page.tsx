import { HeaderGradientBlogPost } from "@/components/navbar/HeaderGradient";
import { getAllPostFrontmatter, getPostData } from "@/util/posts";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// generate routes at build time
export async function generateStaticParams() {
	const posts = getAllPostFrontmatter();

	return posts.map((post) => {
		return {
			slug: post.slug,
		};
	});
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
	const post = getPostData(params.slug);

	return (
		<div>
			<div className="absolute bottom-10 top-0 z-10 w-full">
				<h1 className="absolute left-16 top-24 z-20 font-grotesk text-3xl font-bold text-zinc-900">
					{post.title}
				</h1>
				<div className="h-full w-full bg-gradient-to-br from-primary to-zinc-100 blur-2xl"></div>
			</div>
			<div className="mx-auto mt-80 w-4/5 lg:w-1/2">
				<div className="flex flex-col space-y-10 pb-20">
					<Image
						src={post.coverImage!}
						alt={post.title}
						width={1080}
						height={720}
						className="z-30 w-max"
					/>
					<ReactMarkdown className="prose prose-zinc z-30 max-w-none prose-headings:font-grotesk">
						{post.content}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}
