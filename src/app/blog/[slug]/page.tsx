import { getAllPostFrontmatter, getPostData } from "@/util/getBlogData";
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
            <Image src={post.coverImage!} alt={post.title} width={1080} height={720} />
            <ReactMarkdown className="prose mx-auto pt-8">{post.content}</ReactMarkdown>
        </div>
    );
}
