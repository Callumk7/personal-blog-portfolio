import path from "path";
import fs from "fs";

interface Category {
	id: number;
	name: string;
}

export function getCategories(): Category[] {
	const filePath = path.join(process.cwd(), "public", "data", "categories.json");

	const fileContents = fs.readFileSync(filePath, "utf-8");

	return JSON.parse(fileContents);
}
