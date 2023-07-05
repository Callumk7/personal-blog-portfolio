import { PostWithCategory } from "@/types";
import PostCard from "./PostCard";
import TitlePostCard from "./TitlePostCard";

export default function PostCardView({ posts }: { posts: PostWithCategory[] }) {
  const titlePost = posts.shift()!;
  return (
    <div className="grid grid-cols-1 justify-items-stretch lg:grid-cols-2 lg:gap-x-4">
      <TitlePostCard post={titlePost} />
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
