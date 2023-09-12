"use client";

import { Category } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchBar from "./Searchbar";
import "./hide-sidebar.css";

export default function TagFilter({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  const isBlog = pathname === "/blog";

  return (
    <nav className="scrollbar-hide max-w-full overflow-x-auto">
      <div className="flex-row justify-between whitespace-nowrap pb-10 pt-8 md:flex">
        <ul className="flex w-auto flex-row space-x-8">
          {isBlog ? (
            <li>
              <Link
                className="border-b-2 border-primary pb-1 font-bold text-primary"
                href="/blog"
              >
                all
              </Link>
            </li>
          ) : (
            <li>
              <Link
                className="text-muted transition ease-in hover:text-current"
                href="/blog"
              >
                all
              </Link>
            </li>
          )}
          {categories.map((category) => {
            if (pathname === `/blog/${category.name}`) {
              return (
                <li key={category.id}>
                  <Link
                    className="border-b-2 border-primary pb-1 font-bold text-primary"
                    href={`/blog/${category.name}`}
                  >
                    {category.name}
                  </Link>
                </li>
              );
            }
            return (
              <Link
                className="text-muted transition ease-in hover:text-current"
                key={category.id}
                href={`/blog/${category.name}`}
              >
                {category.name}
              </Link>
            );
          })}
        </ul>
        <div className="mt-5 w-full md:mt-0 md:w-fit">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
