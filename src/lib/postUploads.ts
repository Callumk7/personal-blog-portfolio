import { Prisma } from "@prisma/client";
import prisma from "@/db/client";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

function createSlug(title: string): string {
	let slug = "";
	const words = title.split(" ");
	for (let index = 0; index < words.length; index++) {
		slug += words[index].toLowerCase().replace(/[^0-9a-z]/g, "");
		if (index !== words.length - 1) {
			slug += "-";
		}
	}
	return slug;
}

async function findOrCreateCategory(category: string) {
	const upsertCategory = await prisma.category.upsert({
		where: {
			name: category,
		},
		update: {},
		create: {
			name: category,
		},
	});
	return upsertCategory;
}

type MarkdownPost = {
	title: string;
	content: string;
	coverImage: string;
	description: string;
	category: string;
};

export async function uploadPost(post: MarkdownPost) {
	// create required fields
	const slug = createSlug(post.title);
	const category = await findOrCreateCategory(post.category);

	//construct post to upload to database
	const postToUpload: Prisma.PostCreateInput = {
		title: post.title,
		content: post.content,
		coverImage: post.coverImage,
		description: post.description,
		slug,
		category: {
			connect: {
				id: category.id,
			},
		},
	};

	const createPost = await prisma.post.create({ data: postToUpload });
	return createPost;
}

function readFile(filePath: string): MarkdownPost {
	const fileData = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileData);
	const { title, description, category, coverImage } = data;
	return {
		title,
		description,
		coverImage,
		category,
		content,
	};
}

export function getPostDataFromFile(file: string): MarkdownPost {
	const filePath = path.join(process.cwd(), "_uploads", file);
	return readFile(filePath);
}

export function getPostDataFromFiles(): MarkdownPost[] {
	const fileDirectory = path.join(process.cwd(), "_uploads");
	const files = fs.readdirSync(fileDirectory, "utf8");
	const markdownPostArray = [];
	for (const file in files) {
		const fullFilePath = path.join(fileDirectory, file);
		markdownPostArray.push(readFile(fullFilePath));
	}
	return markdownPostArray;
}
