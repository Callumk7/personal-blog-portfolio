import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, serial, text, timestamp } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
    postedAt: timestamp("posted_at"),
    coverImage: text("cover_image"),
    content: text("content"),
    description: text("description"),
});

export const postsRelations = relations(posts, ({ many }) => ({
    postsToTags: many(postsToTags),
}));

export const tags = pgTable("tags", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    color: text("color"),
});

export const tagsRelations = relations(tags, ({ many }) => ({
    postsToTags: many(postsToTags),
}));

export const postsToTags = pgTable(
    "posts_to_tags",
    {
        postId: integer("post_id")
            .notNull()
            .references(() => posts.id),
        tagId: integer("tag_id")
            .notNull()
            .references(() => tags.id),
    },
    (t) => ({
        pk: primaryKey(t.postId, t.tagId),
    })
);

export const postsToTagsRelations = relations(postsToTags, ({ one }) => ({
    post: one(posts, {
        fields: [postsToTags.postId],
        references: [posts.id],
    }),
    tag: one(tags, {
        fields: [postsToTags.tagId],
        references: [tags.id],
    }),
}));
