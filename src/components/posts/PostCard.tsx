"use client";

import { Post } from "@prisma/client";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <Link
        href={`/blog/posts/${post.slug}`}
        className="flex h-52 flex-col overflow-y-hidden border border-dune-900 px-2 py-5 transition ease-in hover:bg-eminence-700"
      >
        <p className="font-sans text-xs text-dune-400">{post.createdAt.toDateString()}</p>
        <h2 className="py-3 font-syne text-xl font-bold">{post.title}</h2>
        <p className="font-figtree pb-2 text-xs">{post.description}</p>
      </Link>
    </div>
  );
}
