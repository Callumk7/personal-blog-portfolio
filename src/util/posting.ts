import fs from "fs";
import matter from "gray-matter";
import path from "path";

// this is used by a number of functions in this file
const uploadDirectory = path.join(process.cwd(), "_uploads");

function getPosts(): matter.GrayMatterFile<string>[] {
    const files = fs.readdirSync(uploadDirectory);

    const parsedFiles = files.map((file) => {
        const filePath = path.join(uploadDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const parsedFile = matter(fileContents);
        return parsedFile;
    });

    return parsedFiles;
}

function validateFrontmatter(file: matter.GrayMatterFile<string>) {
    const { data, content } = file;
    const { title, description, date, tags, coverImage } = data;

    if (!title || !description || !date || !tags || !coverImage) {
        throw new Error("Invalid frontmatter");
    }
    if (!content) {
        throw new Error("No content found");
    }
}

function uploadPosts() {
    const posts = getPosts();

    const errors: { post: any; error: any }[] = [];
    posts.forEach((post) => {
        try {
            validateFrontmatter(post);
        } catch (error: any) {
            const loggedError = {
                post: post.data.title,
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
