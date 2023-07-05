"use client";

import { PostWithCategory } from "@/types";
import PostCard from "./PostCard";
import TitlePostCard from "./TitlePostCard";
import { useAtom } from "jotai";
import { searchAtom } from "../tag-filter/Searchbar";
import Header from "../ui/Header";

export default function PostCardView({ posts }: { posts: PostWithCategory[] }) {
  const [searchTerm] = useAtom(searchAtom);
  const filteredPosts = posts.filter((post) => {
    if (searchTerm === "") {
      return post;
    } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return post;
    }
  });

  if (filteredPosts.length === 0) {
    return <Header h={2}>No posts found!</Header>;
  }

  const titlePost = filteredPosts.slice(0, 1)[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="grid grid-cols-1 justify-items-stretch lg:grid-cols-2 lg:gap-x-4">
      <TitlePostCard post={titlePost} />
      {otherPosts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
