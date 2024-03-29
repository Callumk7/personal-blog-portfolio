import { PostWithCategory } from "@/types";
import Link from "next/link";
import Tag from "../ui/Tag";
import Header from "../ui/Header";

export default function PostCard({ post }: { post: PostWithCategory }) {
  return (
    <Link
      href={`/blog/posts/${post.slug}`}
      className="flex flex-col border-t border-accent px-2 py-5 transition ease-in hover:bg-highlight md:h-72 lg:overflow-y-hidden"
    >
      <div className="flex flex-row space-x-4">
        <Tag category={post.category} />
        <p className="font-mono text-muted">
          {post.createdAt.toDateString().toUpperCase()}
        </p>
      </div>
      <Header className="hover:underline" h={2}>
        {post.title}
      </Header>
      <p className="hidden pb-2 md:block">{post.description}</p>
    </Link>
  );
}
