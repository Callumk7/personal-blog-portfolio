import PostCardView from "@/components/posts/PostCardView";
import { getAllPosts, getAllPostsWithCategory } from "@/util";

import Header from "@/components/ui/Header";

export default async function BlogPage() {
  const posts = await getAllPostsWithCategory();

  return (
    <main>
      <Header>Blog.</Header>
      <PostCardView posts={posts} />
    </main>
  );
}
