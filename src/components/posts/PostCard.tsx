import { PostWithCategory } from "@/types";
import Link from "next/link";
import Tag from "../ui/Tag";
import Header from "../ui/Header";

export default function PostCard({ post }: { post: PostWithCategory }) {
  return (
    <Link
      href={`/blog/posts/${post.slug}`}
      className="flex h-72 flex-col overflow-y-hidden border-t border-slate-400 px-2 py-5 transition ease-in hover:bg-slate-100"
    >
      <div className="flex flex-row space-x-4">
        <Tag category={post.category} />
        <p className="font-mono text-slate-400">
          {post.createdAt.toDateString().toUpperCase()}
        </p>
      </div>
      <Header className="underline" h={2}>{post.title}</Header>
      <p className="font-figtree pb-2">{post.description}</p>
    </Link>
  );
}
