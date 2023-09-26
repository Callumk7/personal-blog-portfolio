import { prisma } from "@/lib/clients/prisma";
import { Category, Post, PostWithCategory } from "@/types";

// category stuff
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

// post stuff
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

export async function getRecentPosts(count: number) {
	const posts = await prisma.post.findMany({
		orderBy: {
			updatedAt: "desc",
		},
		take: count,
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

// Project Stuff

export async function getAllProjectsWithCategory() {
	const projects = await prisma.project.findMany({
		include: {
			category: true,
		},
	});

	return projects;
}
