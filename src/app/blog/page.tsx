import PostCard from "@/components/PostCard";
import { getAllPostFrontmatter, getRecentPostFrontmatter } from "@/util/getBlogData";

export default async function BlogPage() {
    const posts = getRecentPostFrontmatter(8);
    return (
        <div className="flex flex-wrap">
            {posts.map((post) => {
                return <PostCard key={post.slug} post={post} />;
            })}
        </div>
    );
}
