"use client";

import { Post } from "@prisma/client";
import clsx from "clsx";
import Link from "next/link";

interface PostSideBarProps {
  posts: Post[];
  className?: string;
}

export default function PostSideBar({ posts, className }: PostSideBarProps) {
  return (
    <div className={clsx(className, "border border-dune-900")}>
      <h2 className="font-syne text-lg font-bold">Related Posts</h2>
      <ul className="flex flex-col space-y-4">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link
                href={`/blog/posts/${post.slug}`}
                scroll={true}
                className="pb-2 text-dune-900 hover:text-primary"
              >
                {post.title}
              </Link>
              <p className="text-sm text-dune-800">{post.createdAt.toDateString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
