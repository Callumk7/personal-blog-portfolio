import { Post } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const uploadDirectory = path.join(process.cwd(), "_uploads");

function getPosts(): Post[] {
    const files = fs.readdirSync(uploadDirectory);

    const parsedFiles = files.map((file) => {
        const filePath = path.join(uploadDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const parsedFile = matter(fileContents);
        const { data, content } = parsedFile;
        const { title, description, date, tags, slug, coverImage } = data;
        return {
            title,
            description,
            date,
            tags,
            slug,
            coverImage,
            content,
        };
    });

    return parsedFiles;
}

function validateFrontmatter(file: Post) {
    const errors: string[] = [];
    if (!file.title) {
        errors.push("No title found");
    }
    if (!file.slug) {
        errors.push("No slug found");
    }
    if (!file.description) {
        errors.push("No description found");
    }
    if (!file.date) {
        errors.push("No date found");
    }
    if (!file.tags) {
        errors.push("No tags found");
    }
    if (!file.coverImage) {
        errors.push("No cover image found");
    }
    if (!file.content) {
        errors.push("No content found");
    }

    if (errors.length > 0) {
        throw new Error(errors.join(", "));
    }
}

function uploadPosts() {
    const posts = getPosts();

    const errors: { post: string | undefined; error: string }[] = [];
    posts.forEach((post) => {
        try {
            validateFrontmatter(post);
        } catch (error: any) {
            const loggedError = {
                post: post.title,
                error: error.message!,
            };
            errors.push(loggedError);
        }
    });
    if (errors.length > 0) {
        console.log(errors);
        throw new Error("Invalid frontmatter found");
    }

    console.log("Check complete");
}

uploadPosts();
