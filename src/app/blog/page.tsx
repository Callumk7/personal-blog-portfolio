import PostCard from "@/components/posts/PostCard";
import { getRecentPostFrontmatter } from "@/util/get-blog-data";

export default async function BlogPage() {
    const posts = getRecentPostFrontmatter(8);
    return (
        <main className="mt-10 flex flex-col space-y-6 px-24">
            <h1 className="font-grotesk text-6xl text-primary">Blog.</h1>
            <section className="font-sans">
                <p>
                    Hey, thanks for stopping by. I write about programming and software development,
                    my journey learning these skills, and about my life. If you have questions
                    please get in touch with me on twitter, or leave a comment in the guestbook.
                </p>
            </section>
            <section className="mx-auto">
                <div className="flex flex-auto flex-wrap content-start justify-start">
                    {posts.map((post) => {
                        return <PostCard key={post.slug} post={post} />;
                    })}
                </div>
            </section>
        </main>
    );
}
