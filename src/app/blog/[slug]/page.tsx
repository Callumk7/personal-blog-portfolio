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
        <div>
            <div className="z-1 absolute left-0 top-0 h-1/2 w-screen items-center overflow-hidden">
                <Image
                    src={post.coverImage!}
                    alt={post.title}
                    width={1080}
                    height={720}
                    className="w-screen"
                />
            </div>
            <ReactMarkdown className="prose z-10 mr-10 mt-[600px] max-w-screen-lg place-self-start pt-8 prose-headings:font-grotesk">
                {post.content}
            </ReactMarkdown>
        </div>
    );
}
