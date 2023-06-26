import "module-alias/register";
import prisma from "@/db/client";
import { getPostDataFromFile, uploadPost } from "../lib/postUploads";
import fs from "fs";
import path from "path";
import readline from "readline";
import { Post } from "@prisma/client";
import prompts from "prompts";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const fileDirectory = path.join(process.cwd(), "uploads");

async function main() {
	// async fetch the existing posts
	let uploadedPosts: Post[];
	prisma.post
		.findMany()
		.then((result) => {
			console.log("fetched posts");
			uploadedPosts = result;
		})
		.catch((error) => {
			console.log("error fetching posts");
			console.error(error);
		});

	let files: string[];
	fs.readdir(fileDirectory, (err, f) => {
		if (err) {
			console.error(err);
			return;
		}
		files = f;
	});

	rl.question(
		"Select an option:\n1. Upload all files\n2. Select file\n",
		async (option: string) => {
			// all files
			if (option === "1") {
				console.log("uploading all files...");
				console.log(uploadedPosts[1].title);

				// select a file
			} else if (option === "2") {
				// print files
				console.log("select a file.");
				files.forEach((file, index) => {
					console.log(`${index + 1}. ${file}`);
				});

				// get user's selection
				const number = await new Promise((resolve) => {
					rl.question("Which file do you want to upload?", (number: string) => {
						resolve(number);
					});
				});
				const selectedFile = files[Number(number) - 1];
				console.log(`uploading ${selectedFile}...`);
				files = files.filter((file) => file === selectedFile);
			}
			files.forEach(async (file) => {
				try {
					const postData = getPostDataFromFile(file);
					const confirmation = await uploadPost(postData);
					console.log(`uploaded ${confirmation.title}`);
				} catch (error) {
					console.error((error as Error).message);
				}
			});
		}
	);
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
