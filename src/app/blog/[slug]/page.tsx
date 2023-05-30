import { getAllPostFrontmatter, getPostData } from "@/util/posts";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// generate routes at build time
export async function generateStaticParams() {
    const posts = getAllPostFrontmatter();

    return posts.map((post) => {
        return {
            slug: post.slug,
        };
    });
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const post = getPostData(params.slug);

    return (
        <div className="px-5">
            <div className="flex flex-col space-y-10">
                <Image
                    src={post.coverImage!}
                    alt={post.title}
                    width={1080}
                    height={720}
                    className="max-w-md"
                />
                <ReactMarkdown className="prose prose-headings:font-grotesk">
                    {post.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
