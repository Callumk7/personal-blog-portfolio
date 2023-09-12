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
    <div className={clsx(className, "border border-accent")}>
      <h2 className="pb-3 font-syne text-lg font-bold">Related Posts</h2>
      <ul className="flex flex-col space-y-4">
        {posts.map((post) => {
          return (
            <li key={post.id} className="pb-4">
              <Link
                href={`/blog/posts/${post.slug}`}
                scroll={true}
                className="underline hover:text-primary"
              >
                {post.title}
              </Link>
              <p className="pt-2 font-mono text-sm text-accent">
                {post.createdAt.toDateString().toUpperCase()}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
