import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function addFrontmatterToFiles(
    directory: string,
    key: string,
    values: string[]
): Promise<number> {
    let absoluteDirectory = path.join(process.cwd(), directory);
    const files = await fs.promises.readdir(absoluteDirectory);
    let count = 0;

    for (const file of files) {
        const filePath = path.join(absoluteDirectory, file);
        const fileContent = await fs.promises.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);

        const newData = { ...data, [key]: values[count] };
        const newFileContent = matter.stringify(content, newData);

        await fs.promises.writeFile(filePath, newFileContent);

        count++;
    }

    return count;
}

const directory = "public/posts";
const key = "category";
const values = ["chat", "tech", "photography", "fun"];

addFrontmatterToFiles(directory, key, values).then((count) => {
    console.log(`Updated ${count} files`);
});
