import { Category, Post, Prisma } from "@prisma/client";

const postWithCategory = Prisma.validator<Prisma.PostArgs>()({
	include: {
		category: true,
	},
});

type PostWithCategory = Prisma.PostGetPayload<typeof postWithCategory>;

enum Color {
	RED,
	GREEN,
	YELLOW,
	PURPLE,
}

export type { Category, Color, Post, PostWithCategory };
