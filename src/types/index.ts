import { Category, Post, Prisma } from "@prisma/client";
import Image from "next/image";

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

interface Social {
	name: string;
	link: string;
	icon: string;
}

export type { Category, Color, Post, PostWithCategory, Social };
