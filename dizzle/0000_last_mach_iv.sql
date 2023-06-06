CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"slug" text,
	"description" text,
	"content" text,
	"created_time" timestamp DEFAULT now(),
	"post_date" date
);

CREATE TABLE IF NOT EXISTS "tagged_posts" (
	"post_id" integer,
	"tag_id" integer
);
--> statement-breakpoint
ALTER TABLE "tagged_posts" ADD CONSTRAINT "tagged_posts_post_id_tag_id" PRIMARY KEY("post_id","tag_id");

CREATE TABLE IF NOT EXISTS "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);

DO $$ BEGIN
 ALTER TABLE "tagged_posts" ADD CONSTRAINT "tagged_posts_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "tagged_posts" ADD CONSTRAINT "tagged_posts_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
