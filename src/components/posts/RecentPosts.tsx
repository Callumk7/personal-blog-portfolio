import { PostFrontmatter } from "@/types";
import PostCard from "./PostCard";
import InlinePostCard from "./InlinePostCard";

export default function RecentPosts({
    posts,
    countWithImages,
}: {
    posts: PostFrontmatter[];
    countWithImages: number;
}) {
    const postsWithImages = posts.splice(0, countWithImages);
    return (
        <div className="flex flex-col">
            <div className="flex">
                {postsWithImages.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
            <div className="flex flex-col">
                {posts.map((post) => (
                    <InlinePostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}
