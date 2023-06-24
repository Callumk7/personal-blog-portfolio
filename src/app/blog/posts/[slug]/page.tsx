import { getAllPostFrontmatter, getPostData } from "@/util/posts";
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
		<div className="mt-80">
			<div className="flex flex-col pb-20">
				<div className="border-b border-black">
					<h1 className="mx-auto w-11/12 pb-8 font-syne text-4xl font-bold text-zinc-900 lg:w-1/2">
						{post.title}
					</h1>
				</div>
				<div className="border-b border-l border-r border-black pb-10">
					<ReactMarkdown className="prose prose-zinc mx-auto w-11/12 max-w-none pr-6 pt-8 prose-headings:font-syne lg:w-1/2">
						{post.content}
					</ReactMarkdown>
				</div>
				<div className="p-8">
					<h2 className="font-syne text-xl font-bold">Related Posts</h2>
				</div>
			</div>
		</div>
	);
}