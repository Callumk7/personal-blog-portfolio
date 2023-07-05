import { PostWithCategory } from "@/types";
import Link from "next/link";
import Tag from "../ui/Tag";

export default function PostCard({ post }: { post: PostWithCategory }) {
  return (
    <div>
      <Link
        href={`/blog/posts/${post.slug}`}
        className="flex h-52 flex-col overflow-y-hidden border border-slate-900 px-2 py-5 transition ease-in hover:bg-eminence-700"
      >
        <Tag category={post.category} />
        <p className="font-sans text-xs text-slate-400">
          {post.createdAt.toDateString()}
        </p>
        <h2 className="py-3 font-syne text-xl font-bold">{post.title}</h2>
        <p className="font-figtree pb-2 text-xs">{post.description}</p>
      </Link>
    </div>
  );
}
