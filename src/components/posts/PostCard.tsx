import { Post } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

const addLikeOnServer = (id: number) => {
  fetch(`/api/posts/likes/${id}`, {
    method: "PATCH",
  });
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <Link
        href={`/blog/posts/${post.slug}`}
        className="flex flex-col border border-dune-900 px-2 py-5 transition ease-in hover:bg-eminence-700"
      >
        <h2 className="py-3 font-syne text-xl font-bold">{post.title}</h2>
        <p className="font-figtree pb-2 text-xs">{post.description}</p>
      </Link>
    </div>
  );
}
