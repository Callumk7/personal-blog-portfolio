import { Prisma } from "@prisma/client";
import prisma from "@/db/client";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

function createSlug(title: string): string {
	let slug = "";
	const words = title.split(" ");
	for (let index = 0; index < words.length; index++) {
		slug += words[index];
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

async function uploadPost(post: MarkdownPost) {
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

function getPostDataFromFile(file: string): MarkdownPost {
	const fileDirectory = path.join(process.cwd(), "_uploads", file);

	const fileData = fs.readFileSync(fileDirectory, "utf8");
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

async function main() {
	const postData = getPostDataFromFile("javascript.md");
	const confirmation = await uploadPost(postData);
	console.log(confirmation);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
