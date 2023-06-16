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
		<div className="mx-auto mt-80 w-4/5 lg:w-1/2">
			<div className="flex flex-col pb-20">
				<h1 className="border-b-2 border-black pb-8 font-syne text-4xl font-bold text-zinc-900">
					{post.title}
				</h1>
				<ReactMarkdown className="prose prose-zinc max-w-none border-r-2 border-black pr-6 pt-8 prose-headings:font-syne">
					{post.content}
				</ReactMarkdown>
			</div>
		</div>
	);
}
