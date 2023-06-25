import { Category } from "@prisma/client";
import prisma from "../../prisma/client";

export async function getAllCategories() {
  const categories = await prisma.category.findMany();
  return categories;
}
