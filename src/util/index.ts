import prisma from "@/db/client";
import { Category, Post } from "@/types";

export async function getAllCategories() {
  const categories: Category[] = await prisma.category.findMany();
  return categories;
}

export async function getAllPosts() {
  const posts: Post[] = await prisma.post.findMany();
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
