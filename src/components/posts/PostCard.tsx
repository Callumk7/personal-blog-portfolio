import { PostFrontmatter } from "@/types";
import Link from "next/link";
import Tag from "../shared/tags";

export default function PostCard({ post }: { post: PostFrontmatter }) {
  return (
    <Link
      href={`/blog/posts/${post.slug}`}
      className="flex flex-col border border-black from-primary to-neutral-200 px-2 py-5 transition ease-in hover:bg-primary"
    >
      <h2 className="py-3 font-syne text-xl font-bold">{post.title}</h2>
      <p className="pb-2 font-sans text-xs">{post.description}</p>
    </Link>
  );
}
