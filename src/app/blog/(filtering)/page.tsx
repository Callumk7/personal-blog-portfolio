import PostCardView from "@/components/posts/PostCardView";
import { getAllPosts } from "@/util";

import { Post } from "@/types";
import Header from "@/components/ui/Header";

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <main>
      <Header>Blog.</Header>
      <PostCardView posts={posts} />
    </main>
  );
}
