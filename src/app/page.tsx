import InlinePostCard from "@/components/InlinePostCard";
import { getAllPostFrontmatter } from "@/util/getBlogData";

export default function Home() {
    const posts = getAllPostFrontmatter();

    return (
        <div className="h-screen">
            <section className="flex h-screen items-center">
                <h1 className="p-6 font-grotesk text-title">Nice to meet you, I&apos;m Callum!</h1>
            </section>

            <section className="flex h-screen flex-col content-center justify-items-start">
                <div className="mx-10 flex w-auto flex-col space-y-4">
                    <h2 className="text-3xl font-bold">Recent Posts</h2>
                    {posts.map((post) => {
                        return <InlinePostCard key={post.slug} post={post} />;
                    })}
                </div>
            </section>
        </div>
    );
}
