import "module-alias/register";
import prisma from "@/db/client";
import { getPostDataFromFile, uploadPost } from "../lib/postUploads";
import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const fileDirectory = path.join(process.cwd(), "uploads");

async function main() {
	// find the files to upload
	let files: string[];
	rl.question("Select an option:\n1. Upload all files\n2. Select file\n", (option: string) => {
		if (option === "1") {
			// upload all files
			console.log("uploading all files...");
			files.push("ALL");
		} else if (option === "2") {
			// select file
			fs.readdir(fileDirectory, (err, files) => {
				if (err) {
					console.error(err);
					return;
				}
				console.log("select a file.");
				files.forEach((file, index) => {
					console.log(`${index + 1}. ${file}`);
				});
				rl.question("Which file do you want to upload?", async (number: string) => {
					const selectedFile = files[Number(number) - 1];
					console.log(`uploading ${selectedFile}...`);
					files.push(selectedFile);
					try {
						const postData = getPostDataFromFile(selectedFile);
						const confirmation = await uploadPost(postData);
						console.log(`uploaded ${confirmation.title}`);
						try {
							await prisma.$disconnect();
						} catch (e) {
							console.error(e);
						} finally {
							process.exit();
						}
					} catch (e) {
						console.error(e);
					}
				});
			});
		}
	});
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
