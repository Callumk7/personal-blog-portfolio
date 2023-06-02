import Image from "next/image";
import { PostFrontmatter } from "@/types";
import Link from "next/link";

export default function PostCard({ post }: { post: PostFrontmatter }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="flex flex-col">
                <h2 className="font-sans text-xl font-medium">{post.title}</h2>
                <div className="overflow-hidden rounded-md">
                    <Image src={post.coverImage!} alt={post.title} width={800} height={600} />
                </div>
            </div>
        </Link>
    );
}
