import { getAllPosts } from "@/util";
import PostCard from "./PostCard";
import { Post } from "@prisma/client";

export default async function PostCardViewServer() {
  const posts = await getAllPosts();
  return (
    <div className="grid grid-cols-1 justify-items-stretch gap-x-5 gap-y-5 lg:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
