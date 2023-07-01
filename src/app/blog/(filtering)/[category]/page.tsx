import PostCardView from "@/components/posts/PostCardView";
import Header from "@/components/ui/Header";
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
    <>
      <Header>{params.category}</Header>
      <PostCardView posts={posts} />
    </>
  );
}
