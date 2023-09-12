import { PostWithCategory } from "@/types";
import Header from "../ui/Header";
import Tag from "../ui/Tag";
import Link from "next/link";

export default function TitlePostCard({ post }: { post: PostWithCategory }) {
  return (
    <Link
      href={`/blog/posts/${post.slug}`}
      className="flex h-72 w-full flex-col items-start lg:justify-between gap-x-6 border-t border-accent px-2 py-10 transition ease-in hover:bg-highlight lg:col-span-2 lg:flex-row lg:items-center"
    >
      <div>
        <div className="flex flex-row space-x-4">
          <Tag category={post.category} bg={post.category.color} />
          <p className="font-mono text-muted">
            {post.createdAt.toDateString().toUpperCase()}
          </p>
        </div>
        <Header className="underline" h={2}>
          {post.title}
        </Header>
      </div>
      <p className="hidden md:block lg:w-1/2">{post.description}</p>
    </Link>
  );
}
