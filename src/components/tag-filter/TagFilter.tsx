"use client";

import { Category } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TagFilter({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  const isBlog = pathname === "/blog";

  return (
    <nav className="w-full pb-10 pt-8">
      <ul className="flex flex-row space-x-8">
        {isBlog ? (
          <li>
            <Link className="text-red-500" href="/blog">
              all
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/blog">all</Link>
          </li>
        )}
        {categories.map((category) => {
          if (pathname === `/blog/${category.name}`) {
            return (
              <li key={category.id}>
                <Link className="text-red-500" href={`/blog/${category.name}`}>
                  {category.name}
                </Link>
              </li>
            );
          }
          return (
            <Link key={category.id} href={`/blog/${category.name}`}>
              {category.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
