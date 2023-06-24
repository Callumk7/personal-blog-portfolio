import { getRecentPostFrontmatter } from "@/util/posts";
import TagFilter from "@/components/tag-filter/TagFilter";
import { getAllCategories } from "@/lib/categories";
import PostCardView from "@/components/posts/PostCardView";

export default async function BlogPage() {
	const posts = getRecentPostFrontmatter(8);
	const categories = await getAllCategories();

	return (
		<main className=" mb-24 px-8 md:w-2/3 lg:w-3/4 xl:w-2/3">
			<TagFilter categories={categories} />
			<h1 className="pb-10 font-syne text-6xl font-bold text-zinc-900">Blog.</h1>
			<PostCardView posts={posts} />
		</main>
	);
}
