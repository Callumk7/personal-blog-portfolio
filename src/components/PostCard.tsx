import { Post } from "@/types";

export default function PostCard({ post }: { post: Post }) {
    return (
        <div className="flex flex-col">
            <h2 className="text-lg">{post.title}</h2>
            <p>{post.tags}</p>
        </div>
    );
}
