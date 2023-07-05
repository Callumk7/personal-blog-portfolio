import prisma from "@/db/client";
import { Category, Post, PostWithCategory } from "@/types";

export async function getAllCategories() {
	const categories: Category[] = await prisma.category.findMany();
	return categories;
}

export async function getRecentCategories(count: number) {
	const categories: Category[] = await prisma.category.findMany({
		take: count,
		orderBy: {
			updatedAt: "asc",
		},
	});
	return categories;
}

export async function getMostCategories(count: number) {
	const categories: Category[] = await prisma.category.findMany({
		take: count,
		orderBy: {
			posts: {
				_count: "desc",
			},
		},
	});
	return categories;
}

export async function getAllPosts() {
	const posts: Post[] = await prisma.post.findMany();
	return posts;
}

export async function getAllPostsWithCategory() {
	const posts: PostWithCategory[] = await prisma.post.findMany({
		include: {
			category: true,
		},
	});
	return posts;
}

export async function getPostsByCategory(category: string) {
	const posts: PostWithCategory[] = await prisma.post.findMany({
		where: {
			category: {
				name: category,
			},
		},
		include: {
			category: true,
		},
	});

	return posts;
}

export async function incrementLikes(id: number, likes: number) {
	const update = await prisma.post.update({
		where: {
			id: id,
		},
		data: {
			likes: likes,
		},
	});
	return update;
}
