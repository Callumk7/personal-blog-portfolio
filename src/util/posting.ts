import { Post, Upload } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const uploadDirectory = path.join(process.cwd(), "_uploads");

function createSlug(title: string): string {
    let slug = "";
    const words = title.split(" ");
    for (let index = 0; index < words.length; index++) {
        slug += words[index];
        if (index !== words.length - 1) {
            slug += "-";
        }
    }
    return slug;
}

function createDateObject(date: string): Date {
    // parse date string into date dateObject
    const [day, month, year] = date.split("/");
    const dateObject = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return dateObject;
}

function createPostsFromUploads(): Post[] {
    const files = fs.readdirSync(uploadDirectory);

    const parsedFiles = files.map((file) => {
        const filePath = path.join(uploadDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const parsedFile = matter(fileContents);
        const { data, content } = parsedFile;
        const { title, description, date, tags, coverImage } = data;
        if (!title || !date || !content) {
            throw new Error(`Missing required frontmatter in ${filePath}`);
        }
        const upload: Upload = {
            title,
            date,
            coverImage,
            description,
            tags,
            content,
        };
        return createPostFromUpload(upload);
    });
    return parsedFiles;
}

function createPostFromUpload(upload: Upload): Post {
    const slug = createSlug(upload.title);
    const dateObject = createDateObject(upload.date);
    return {
        ...upload,
        slug,
        dateObject,
    };
}

function writePostsToFile(posts: Post[]): void {
    for (const post of posts) {
        console.log("Writing post:", post.title, "to file...");
        const pathToWriteFiles = path.join(process.cwd(), "public", "posts", `${post.slug}.md`);
        const fileContents = matter.stringify(post.content, {
            title: post.title,
            date: post.date,
            coverImage: post.coverImage,
            description: post.description,
            tags: post.tags,
            dateObject: post.dateObject,
            slug: post.slug,
        });
        console.log("Writing to:", pathToWriteFiles);
        fs.writeFileSync(pathToWriteFiles, fileContents);
    }
}

function main(): void {
    console.log("Creating posts from uploads...");
    const posts = createPostsFromUploads();
    console.log("Writing posts to files...");
    writePostsToFile(posts);
}

main();
