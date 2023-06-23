import PostCardView from "@/components/posts/PostCardView";
import TagFilter from "@/components/tag-filter/TagFilter";
import { getCategories } from "@/util/categories";
import { getPostsByCategory } from "@/util/posts";

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    category: category.name,
  }));
}

export default async function BlogPage({ params }: { params: { category: string } }) {
  const posts = getPostsByCategory(params.category);
  const categories = getCategories();

  return (
    <main className=" mb-24 px-8 md:w-2/3 lg:w-3/4 xl:w-2/3">
      <TagFilter categories={categories} />
      <h1 className="pb-10 font-syne text-6xl font-bold text-zinc-900">Blog.</h1>
      <PostCardView posts={posts} />
    </main>
  );
}
