import { InferModel } from "drizzle-orm";
import { date, integer, pgTable, primaryKey, serial, text, timestamp } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
	id: serial("id").primaryKey(),
	title: text("title"),
	slug: text("slug"),
	description: text("description"),
	content: text("content"),
	createdAt: timestamp("created_time").defaultNow(),
	postDate: date("post_date"),
});

export const tags = pgTable("tags", {
	id: serial("id").primaryKey(),
	name: text("name"),
});

export const taggedPosts = pgTable(
	"tagged_posts",
	{
		postId: integer("post_id").references(() => posts.id),
		tagId: integer("tag_id").references(() => tags.id),
	},
	(t) => ({
		pk: primaryKey(t.postId, t.tagId),
	})
);

// export generated types
export type DBPost = InferModel<typeof posts>;
export type DBTag = InferModel<typeof tags>;
