import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	console.log("adding initial project");
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

// needs target of greater than es2017
await main()
	.then(async () => {
		console.log("then disconnect");
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log("then error");
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

console.log("end of file");
