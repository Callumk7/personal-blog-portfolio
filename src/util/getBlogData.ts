import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFrontmatter } from "@/types";

// returns PostFrontmatter objects for all files in the posts directory
export function getAllPostFrontmatter(): PostFrontmatter[] {
    const postDirectory = path.join(process.cwd(), "public", "posts");
    const fileNames = fs.readdirSync(postDirectory); // string[]

    const postFrontmatter: PostFrontmatter[] = fileNames.map((fileName) => {
        const fullPath = path.join(postDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(fileContent);
        const { title, date, slug } = data;
        return {
            title,
            date,
            slug,
        };
    });
    return postFrontmatter;
}

// retrieves post content from the slug, and returns Post including slug
// TODO: ERROR HANDLING
export function getPostData(slug: string): Post {
    const fullPath = path.join(process.cwd(), "public", "posts", `${slug}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    const { title, date } = data;
    return {
        title,
        date,
        slug,
        content,
    };
}
