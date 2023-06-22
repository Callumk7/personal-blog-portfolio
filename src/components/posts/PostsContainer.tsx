"use client";

import { PostFrontmatter } from "@/types";
import { useState } from "react";
import PostView from "./PostView";

export default function PostsContainer({ posts }: { posts: PostFrontmatter[] }) {
	const [tagFilter, setTagFilter] = useState<string[]>([]);
	let filteredPosts = posts;
	return <PostView posts={filteredPosts} />;
}
