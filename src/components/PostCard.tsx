import Image from "next/image";
import { PostFrontmatter } from "@/types";
import Link from "next/link";

export default function PostCard({ post }: { post: PostFrontmatter }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="flex flex-col p-4">
                <div className="aspect-square w-80 overflow-hidden rounded-md shadow-2xl">
                    <Image
                        src={post.coverImage!}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="h-full object-cover"
                    />
                </div>
                <h2 className="w-80 pr-4 pt-2 font-grotesk text-xl font-medium">{post.title}</h2>
                <div className="flex flex-row">
                    <p className="pr-2 font-sans text-xs text-gray-500">{post.date}</p>
                    <p className="pr-2 font-sans text-xs text-gray-500">|</p>
                    <p className="pr-2 font-sans text-xs text-gray-500">Callum Kloos</p>
                </div>
            </div>
        </Link>
    );
}
