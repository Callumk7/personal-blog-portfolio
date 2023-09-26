import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	console.log("Seeding categories");
	const rustCat = await prisma.category.upsert({
		where: { name: "rust" },
		update: {
			name: "rust",
			color: "bg-bright-orange",
		},
		create: {
			name: "rust",
			color: "bg-bright-orange",
		},
	});
	const reactCat = await prisma.category.upsert({
		where: { name: "react" },
		update: {
			name: "react",
			color: "bg-blue-500 text-light",
		},
		create: {
			name: "react",
			color: "bg-blue-500 text-light",
		},
	});
	const programmingCat = await prisma.category.upsert({
		where: { name: "programming" },
		update: {
			name: "programming",
			color: "bg-bright-green",
		},
		create: {
			name: "programming",
			color: "bg-bright-green",
		},
	});
	console.log("seeded: ", reactCat, rustCat, programmingCat);

	console.log("seeding posts..");
	const rust = await prisma.post.upsert({
		where: { title: "Why Rust is Great" },
		update: {},
		create: {
			title: "Why Rust is Great",
			slug: "why-rust-is-great",
			coverImage: "www.example.com",
			description:
				"Rust is great, and in this article you are going to learn why it is so great.",
			content: "# Title\n\nGreat Scott! What a read!",
			categoryId: 18,
		},
	});
	console.log(rust);
	console.log("adding initial projects");
	const playQ = await prisma.project.upsert({
		where: {
			title: "playQ",
		},
		update: {
			description:
				"Create playlists of games you rate, hate, or just can't wait to play",
		},
		create: {
			title: "playQ",
			description:
				"Create playlists of games you rate, hate, or just can't wait to play",
		},
	});
	console.log(playQ);
	console.log("done");
	const blog = await prisma.project.upsert({
		where: {
			title: "This Blog",
		},
		update: {
			description:
				"A personal portfolio and blog where I can showcase some of my writing, photography and projects that I am currently working on",
		},
		create: {
			title: "This Blog",
			description:
				"A personal portfolio and blog where I can showcase some of my writing, photography and projects that I am currently working on",
		},
	});
	console.log(blog);
	console.log("done");
}

await main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
