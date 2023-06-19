import { getRecentPostFrontmatter } from "@/util/posts";
import PostCard from "@/components/posts/PostCard";
import CoverPostCard from "@/components/posts/CoverPostCard";

export default async function BlogPage() {
	const posts = getRecentPostFrontmatter(8);
	const coverPost = posts.shift()!;

	return (
		<main className="mx-auto mb-24 w-4/5 px-8 md:w-2/3 lg:w-3/4 xl:w-2/3">
			<h1 className="pb-10 font-syne font-bold text-6xl text-zinc-900">Blog.</h1>
			<section className="pb-5">
				<CoverPostCard post={coverPost} />
			</section>
			<section className=" grid grid-cols-1 justify-items-stretch gap-x-5 gap-y-5 lg:grid-cols-2">
				{posts.map((post) => (
					<PostCard key={post.slug} post={post} />
				))}
			</section>
		</main>
	);
}
