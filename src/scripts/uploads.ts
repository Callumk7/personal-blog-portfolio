import { db } from "../db";
import { DBNewPost, posts } from "../db/schema";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublicKey = process.env.SUPABASE_PUBLIC_KEY;

console.log(`${supabaseUrl}`);

async function uploadBlogPost(post: DBNewPost) {
	const response = await db.insert(posts).values(post);
	console.dir(post);
}

const newPost: DBNewPost = {
	title: "My new blog post",
	content: "# Wonderful times\n\nWe are in wonderful times, and these times will continue",
	slug: "my-new-blog-post",
	description: "this is wonderful",
};

uploadBlogPost(newPost);
