import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFrontmatter } from "@/types";

// returns PostFrontmatter objects for all files in the posts directory
export function getAllPostFrontmatter(): PostFrontmatter[] {
	const postDirectory = path.join(process.cwd(), "public", "posts");
	const fileNames = fs.readdirSync(postDirectory); // string[]

	const postFrontmatter: PostFrontmatter[] = fileNames.map((fileName) => {
		const fullPath = path.join(postDirectory, fileName);
		const fileContent = fs.readFileSync(fullPath, "utf-8");
		const { data } = matter(fileContent);
		const { title, date, slug, category, coverImage } = data;
		return {
			title,
			date,
			slug,
			category,
			coverImage,
		};
	});
	return postFrontmatter;
}

// retrieves post content from the slug, and returns Post including slug
// TODO: ERROR HANDLING
export function getPostData(slug: string): Post {
	const fullPath = path.join(process.cwd(), "public", "posts", `${slug}.md`);
	const fileContent = fs.readFileSync(fullPath, "utf-8");
	const { data, content } = matter(fileContent);
	const { title, date, coverImage, category } = data;
	return {
		title,
		date,
		slug,
		category,
		coverImage,
		content,
	};
}

// takes a number as an argument, returns that number of most recent posts
// NOTE this function only works if dates are formatted as DD/MM/YYYY, a process flow
// could be added to allow YYYY/MM/DD
export function getRecentPostFrontmatter(count: number) {
	const postFrontmatter = getAllPostFrontmatter();
	const sortedPostsByDate = postFrontmatter
		.map((post) => {
			return {
				...post,
				dateObject: new Date(post.date.split("/").reverse().join("-")),
			};
		})
		.sort((a, b) => b.dateObject.getTime() - a.dateObject.getTime());

	return sortedPostsByDate.slice(0, count);
}
