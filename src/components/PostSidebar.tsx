import { PostFrontmatter } from "@/types";
import Link from "next/link";

export function PostSideBarEntry({ post }: { post: PostFrontmatter }) {
    return (
        <div className="flex flex-col justify-items-start gap-y-4">
            <Link href={`/blog/${post.slug}`} className="font-grotesk text-lg">
                {post.title}
            </Link>
            <p className="font-grotesk text-sm">{post.date}</p>
        </div>
    );
}

export default function PostSidebar({ posts }: { posts: PostFrontmatter[] }) {
    return (
        <div className="sticky top-1/3 flex h-auto flex-col justify-items-start gap-y-4 px-4">
            {posts.map((post) => {
                return <PostSideBarEntry post={post} key={post.slug} />;
            })}
        </div>
    );
}
