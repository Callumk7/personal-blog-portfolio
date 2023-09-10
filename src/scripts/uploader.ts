import "module-alias/register";

import fs from "fs";
import path from "path";

import prompts from "prompts";

import { Post } from "@prisma/client";

import { getPostDataFromFile, uploadPost } from "@/lib/postUploads";
import { prisma } from "@/lib/clients/prisma";

// initialise variables...
const fileDirectory = path.join(process.cwd(), "uploads");
let uploadedPosts: Post[];
let files: string[];
let fileChoices: { title: string; value: number }[] = [];

async function main() {
	const onCancel = () => {
		process.exit();
	};
	// async fetch the existing posts
	// getting this out the way while waiting for input
	prisma.post
		.findMany()
		.then((result) => {
			uploadedPosts = result;
		})
		.catch((error) => {
			console.log("error fetching posts");
			console.error(error);
		});

	// read the files in the upload directory
	// getting this out the way while waiting for input
	fs.readdir(fileDirectory, (err, f) => {
		if (err) {
			console.error(err);
			return;
		}
		// populate files variable
		files = f;
		f.forEach((file, index) => {
			// create multiselect options
			fileChoices.push({
				title: file,
				value: index,
			});
		});
	});

	// using an async function here to ensure that the upload
	// waits for a correctly populated files variable, as per
	// the user's choices
	async function selection() {
		const response = await prompts(
			{
				type: "select",
				name: "value",
				message: "What do you want to upload?",
				choices: [
					{ title: "All files", value: 1 },
					{ title: "Select files", value: 2 },
				],
			},
			{ onCancel }
		);

		// single file...
		if (response.value === 2) {
			const selectFileResponse = await prompts(
				{
					type: "multiselect",
					name: "file",
					message: "Which file do you want to upload?",
					choices: fileChoices,
					hint: "- Space to select. Return to submit",
					instructions: false,
				},
				{ onCancel }
			);

			files = files.filter((_file, index) =>
				selectFileResponse.file.includes(index)
			);
		}

		// attempt to upload the contents of files.
		for (const file of files) {
			try {
				const postData = getPostDataFromFile(file);
				if (uploadedPosts.some((post) => post.title.includes(postData.title))) {
					console.log(
						`Looks like ${postData.title} already exists in the database!`
					);
					continue;
				}
				const uploadedFile = await uploadPost(postData);
				console.log(`uploaded ${uploadedFile.title}`);
			} catch (error) {
				console.error((error as Error).message);
			}
		}
	}
	selection();
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
