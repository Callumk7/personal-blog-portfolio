import PostView from "@/components/posts/PostView";
import PostsContainer from "@/components/posts/PostsContainer";
import { getCategories } from "@/util/categories";
import { getPostsByCategory, getRecentPostFrontmatter } from "@/util/posts";

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
      <nav className="w-full pb-10 pt-8">
        <ul className="flex flex-row space-x-8">
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <p>{category.name}</p>
              </li>
            );
          })}
        </ul>
      </nav>
      <h1 className="pb-10 font-syne text-6xl font-bold text-zinc-900">Blog.</h1>
      <PostView posts={posts} />
    </main>
  );
}
