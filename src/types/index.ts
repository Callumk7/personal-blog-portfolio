import { Category, Post, Prisma } from "@prisma/client";
import { z } from "zod";

const postWithCategory = Prisma.validator<Prisma.PostArgs>()({
	include: {
		category: true,
	},
});

const projectWithCategory = Prisma.validator<Prisma.ProjectArgs>()({
	include: {
		category: true,
	},
});

type PostWithCategory = Prisma.PostGetPayload<typeof postWithCategory>;
type ProjectWithCategory = Prisma.ProjectGetPayload<typeof projectWithCategory>;

enum Color {
	RED,
	GREEN,
	YELLOW,
	PURPLE,
}

interface Social {
	name: string;
	link: string;
	icon: string;
}

export type { Category, Color, Post, PostWithCategory, ProjectWithCategory, Social };
