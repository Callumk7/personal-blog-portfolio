import PostCardView from "@/components/posts/PostCardView";
import { getAllCategories, getPostsByCategory } from "@/util";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.name,
  }));
}

export default async function CategoryBlogPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = await getPostsByCategory(params.category);

  return (
    <main className=" mb-24 px-8 md:w-2/3 lg:w-3/4 xl:w-2/3">
      <h1 className="pb-10 font-syne text-6xl font-bold text-zinc-900">Blog.</h1>
      <PostCardView posts={posts} />
    </main>
  );
}
