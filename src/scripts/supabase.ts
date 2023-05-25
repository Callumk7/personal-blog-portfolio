import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { posts } from "../db/schema";
import { create } from "domain";
import { eq } from "drizzle-orm";

const connectionString =
    "postgresql://postgres:LtFNlqeKr6kS8MOA@db.pcuqfewnlfrjrmivvsnx.supabase.co:5432/postgres";
const client = postgres(connectionString);
const db = drizzle(client);

function createPost() {
    db.insert(posts).values({
        title: "drizzle is still cool",
        slug: "finally-2",
        coverImage:
            "https://images.unsplash.com/photo-1684188474560-ba8f0bd284ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
        content: "# Wonderful blog\nJust a really wonderful blog",
        description: "A post about how wonderful drizzle is",
    });
    const result = db.select().from(posts);
    console.log(result);
    process.exit(1);
}

async function getPost(id: number) {
    return await db.select().from(posts).where(eq(posts.id, id));
}

createPost
