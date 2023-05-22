import { PostFrontmatter } from "@/types";
import Link from "next/link";

// main sidebar component
export default function PostSidebar({ posts }: { posts: PostFrontmatter[] }) {
    return (
        <div className="sticky top-1/3 mx-3 flex h-auto max-w-xs flex-col  space-y-12 p-6">
            {posts.map((post) => {
                return <PostSideBarEntry post={post} key={post.slug} />;
            })}
        </div>
    );
}

// sidebar entry component
export function PostSideBarEntry({ post }: { post: PostFrontmatter }) {
    return (
        <div className="flex flex-col justify-items-start">
            <Link href={`/blog/${post.slug}`} className="font-grotesk text-blue-700">
                {post.title}
            </Link>
            <p className="font-inter text-sm text-gray-500">{post.date}</p>
        </div>
    );
}
