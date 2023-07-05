import { PostWithCategory } from "@/types";
import Header from "../ui/Header";
import Tag from "../ui/Tag";
import Link from "next/link";

export default function TitlePostCard({ post }: { post: PostWithCategory }) {
  return (
    <Link
      href={`/blog/posts/${post.slug}`}
      className="mx-4 flex h-72 w-full flex-col items-start border-t border-slate-400 px-2 py-10 transition ease-in hover:bg-slate-100 lg:col-span-2 lg:flex-row lg:items-center"
    >
      <div>
        <div className="flex flex-row space-x-4">
          <Tag category={post.category} />
          <p className="font-mono text-slate-400">
            {post.createdAt.toDateString().toUpperCase()}
          </p>
        </div>
        <Header className="underline" h={2}>
          {post.title}
        </Header>
      </div>

      <p>{post.description}</p>
    </Link>
  );
}
