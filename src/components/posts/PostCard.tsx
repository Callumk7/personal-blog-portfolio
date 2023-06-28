"use client";

import { Post } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

const addLikeOnServer = (id: number) => {
  fetch(`/api/posts/likes/${id}`, {
    method: "PATCH"
  })
}

export default function PostCard({ post }: { post: Post }) {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    addLikeOnServer(post.id);
  }

  return (
    <div>
      <div className="flex flex-row space-x-3">
        <p className="font-figtree pb-2 text-lg">{likes}</p>
        <button onClick={handleLike}>like button</button>
      </div>
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
