import PostCard from "@/components/posts/PostCard";
import RecentPosts from "@/components/posts/RecentPosts";
import { getRecentPostFrontmatter } from "@/util/posts";

export default async function BlogPage() {
    const posts = getRecentPostFrontmatter(8);
    return (
        <main className="mt-10 flex flex-col space-y-6 px-24">
            <h1 className="font-grotesk text-6xl text-primary">Blog.</h1>
            <h2 className="font-sans text-sm text-gray-500">Updates and musings...</h2>
            <section className="font-sans">
                <p>
                    Hey, thanks for stopping by. I write about programming and software development,
                    my journey learning these skills, and about my life. If you have questions
                    please get in touch with me on twitter, or leave a comment in the guestbook.
                </p>
            </section>
            <section className="mx-auto">
                <RecentPosts posts={posts} countWithImages={3} />
            </section>
        </main>
    );
}
