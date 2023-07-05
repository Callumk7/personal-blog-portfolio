import PostCardView from "@/components/posts/PostCardView";
import { getAllPostsWithCategory } from "@/util";

export default async function BlogPage() {
  const posts = await getAllPostsWithCategory();

  return (
    <main>
      <PostCardView posts={posts} />
    </main>
  );
}
