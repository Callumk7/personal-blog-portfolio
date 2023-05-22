import { PostFrontmatter } from "@/types";
import Link from "next/link";

export default function InlinePostCard({ post }: { post: PostFrontmatter }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="flex flex-col">
                <h2 className="pb-2 font-grotesk text-3xl font-medium">{post.title}</h2>
                <div className="flex flex-row space-x-3">
                    <p className="text-xs text-gray-700">{post.date}</p>
                    <p className="rounded-full bg-green-500 p-1 text-xs text-green-800">
                        {post.category}
                    </p>
                </div>
            </div>
        </Link>
    );
}
