import { PostFrontmatter } from "@/types";
import Link from "next/link";

export default function InlinePostCard({ post }: { post: PostFrontmatter }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="flex flex-col space-y-5">
                <h2 className="pb-2 font-sans text-xl font-medium">{post.title}</h2>
                <div className="flex flex-row space-x-3">
                    <p className="text-xs text-gray-700">{post.date}</p>
                </div>
            </div>
        </Link>
    );
}
