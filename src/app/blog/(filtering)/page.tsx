import PostCardView from "@/components/posts/PostCardView";
import { getAllPostsWithCategory } from "@/util";

export default async function BlogPage() {
  const posts = await getAllPostsWithCategory();
  posts.sort((a, b) => b.updatedAt.valueOf() - a.updatedAt.valueOf());

  return (
    <div>
      <PostCardView posts={posts} />
    </div>
  );
}
