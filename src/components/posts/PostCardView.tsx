import { PostWithCategory } from "@/types";
import PostCard from "./PostCard";

export default function PostCardView({ posts }: { posts: PostWithCategory[] }) {
  return (
    <div className="grid grid-cols-1 justify-items-stretch gap-x-5 gap-y-5 lg:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
