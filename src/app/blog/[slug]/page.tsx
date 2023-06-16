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
